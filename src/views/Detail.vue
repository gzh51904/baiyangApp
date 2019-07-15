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
    <add-cart :goodsInfos="goodsInfos"></add-cart>
  </section>
</template>
<script>
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
      goodsId: null
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
  methods: {},
  computed: {},
  async created() {
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
    console.log(aImg4);
    this.slidePics = aImg2;
    this.goodsDesPics = aImg4;
    this.goodsInfos = datas.data.data;
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