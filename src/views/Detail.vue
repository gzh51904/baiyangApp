<template>
  <section id="baiyang_detail">
    <!-- 头部 -->
    <detail-head></detail-head>
    <!-- 轮播图 -->
    <slideshow :slidePics="slidePics"></slideshow>
    <!-- 商品相关信息 -->
    <goods-infos :goodsInfos="goodsInfos"></goods-infos>
    <!-- 运输相关信息 -->
    <transport-infos></transport-infos>
    <!-- 买家评价 -->
    <buyer-evaluation></buyer-evaluation>
    <!-- 走进品牌 -->
    <enter-brand></enter-brand>
    <!-- 相关推荐 同类热销推荐 -->
    <goods-recommend></goods-recommend>
    <!-- 图文详情 -->
    <graphic-details :goodsDesPics="goodsDesPics"></graphic-details>
    <!-- 加入购物车 立即购买 -->
    <add-cart :addCart="addCart"></add-cart>
  </section>
</template>
<script>
import { mapMutations } from "vuex";
import Head from "../components/detail/Head.vue";
import SlideShow from "../components/detail/Slideshow.vue";
import GoodsInfos from "../components/detail/GoodsInfos.vue";
import Transport from "../components/detail/Transport.vue";
import Evaluation from "../components/detail/Evaluation.vue";
import EnterBrand from "../components/detail/EnterBrand.vue";
import GoodsRecommend from "../components/detail/GoodsRecommend.vue";
import GraphicDetails from "../components/detail/GraphicDetails.vue";
import AddCart from "../components/detail/AddCart.vue";
export default {
  data() {
    return {
      slidePics: [],
      goodsDesPics: [],
      goodsInfos: [],
      goodsId: null,
      num: 0
    };
  },
  components: {
    "detail-head": Head,
    slideshow: SlideShow,
    "goods-infos": GoodsInfos,
    "transport-infos": Transport,
    "buyer-evaluation": Evaluation,
    "enter-brand": EnterBrand,
    "goods-recommend": GoodsRecommend,
    "graphic-details": GraphicDetails,
    "add-cart": AddCart
  },
 
  methods: {
    async initHtml() {
      const datas = await this.$axios(
        "http://127.0.0.1:1904/goods/" + this.$route.query.goods_id
      );
      // 轮播图图片
      var aImg1 = datas.data.data[0]["img_url"].split(";");
      var aImg2 = [];
      for (var i = 0; i < aImg1.length; i++) {
        var sImgUrl = require("../assets/img/" + aImg1[i]);
        aImg2.push(sImgUrl);
      }
      // 图文详情图片
      var aImg3 = datas.data.data[0]["img_des"].split(";");
      var aImg4 = [];
      for (var i = 0; i < aImg3.length; i++) {
        var sImgUrl = require("../assets/img/" + aImg3[i]);
        // console.log(sImgUrl);
        aImg4.push(sImgUrl);
      }
      // console.log(aImg4);
      this.slidePics = aImg2;
      this.goodsDesPics = aImg4;
      this.goodsInfos = datas.data.data;
    },
    // 加入购物车
    async addCart() {
      /*
      需求分析：
      1.用户未登录 本地存储无数据=>创建cart对象，存储数据
      2.用户未登录 本地存储有数据=>遍历cart对象，看是否有该商品，有就修改数量，无添加记录
      3.用户已登录 本地存储无数据 添加记录到数据库 
      4.用户已登录 本地存储有数据 本地记录和新记录合并添加到数据库 删除本地存储
      */

      var sUserName = localStorage.getItem("username"); // 获取用户名
      var sCart = localStorage.getItem("cart"); // 获取cart对象
      var oGoods = {//获取添加到购物车的商品信息
        goods_id: this.goodsInfos[0]["id"],
        goods_name: this.goodsInfos[0].name,
        goods_img: this.goodsInfos[0].img_url.split(";")[0],
        price: this.goodsInfos[0].cur_price,
        num: 1
      };

      /********1.用户未登录 本地存储无数据=>创建cart对象，存储数据***********/
      if (!sUserName && !sCart) {
        console.log("用户未登录，cart对象不存在");
        var aCart = [];
        aCart.push(oGoods);
        localStorage.setItem("cart", JSON.stringify(aCart)); //将数组转为字符串，存储到本地
        return;
      }

      /*********2.用户未登录 本地存储有数据=>遍历cart对象，看是否有该商品，有就修改数量，无添加记录*************/
      if (!sUserName && sCart) {
        // console.log();
        var aCart2 = JSON.parse(sCart); //将字符串转为数组
        var isHave = false;
        var index = null;

        for (var i = 0; i < aCart2.length; i++) {
          if (aCart2[i].goods_id == oGoods.goods_id) {
            isHave = true;//有该商品
            index = i;//该商品的位置
            break;
          }

        }

        if(isHave){
          aCart2[index].num ++;
        }else{
          aCart2.push(oGoods);
        }
        localStorage.setItem("cart", JSON.stringify(aCart2));
        return;
      }


      /******3.用户已登录 本地存储无数据 添加记录到数据库 ******/
      if (sUserName && !sCart) {
        console.log("用户已登录 本地存储无数据");
        oGoods.username = sUserName;
        await this.$axios.post("http://127.0.0.1:1904/cart", oGoods);
        return;
      }

      /********4.用户已登录 本地存储有数据 本地记录和新记录合并添加到数据库 删除本地存储********/
      if (sUserName && sCart) {
        var aCart = JSON.parse(sCart);
        var isHave =false;
        var index = null;
        // 判断有无该商品
        for (var i = 0; i < aCart.length; i++) {
          if (aCart[i].goods_id == oGoods.goods_id) {
            console.log("用户已登录 本地存储有数据 有该商品");
            // aCart[i].num += 1;
            isHave = true;//有该商品
            index = i;//该商品的位置
            break;
          }
        }
        if(isHave){
          aCart[index].num++;

        }else{
          aCart.push(oGoods);
        }

        // 将数据存储到数据库
        for (var i = 0; i < aCart.length; i++) {
          aCart[i].username = sUserName;
          await this.$axios.post("http://127.0.0.1:1904/cart", aCart[i]);
        }
        // 清空本地存储中cart对象
        localStorage.removeItem("cart");
        return;
      }
    },
    ...mapMutations(["displayFoot"])
  },
  computed: {},
  created() {
    this.initHtml(); //初始化页面
    //隐藏foot
    this.displayFoot(false);
  },
  destroyed() {
    this.displayFoot(true);
  }
};
</script>
<style lang="scss" scoped>
#baiyang_detail {
  position: relative;
  padding-top: 1.093333rem;
  padding-bottom: 1.333333rem;
  background: #f5f5f5;
}
</style>