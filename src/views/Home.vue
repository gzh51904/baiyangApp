<template>
  <div id="home">
    <!-- <input type="button" name="" id="" value="跳转到详情页" @click="jumpDetail(1)"> -->
    <!-- 头部 -->
    <app-head></app-head>
    <!-- 轮播图 -->
    <slideshow></slideshow>
    <!-- 企业保证 -->
    <guarantee></guarantee>
    <!-- 商品类别 -->
    <goods-special></goods-special>
    <!-- 福利 -->
    <welfare></welfare>
    <!-- 限时购 -->
    <limit-time-purchase></limit-time-purchase>
    <!-- 健康大牌 -->
    <healthy></healthy>
    <!-- 热门专题 -->
    <hot-topic></hot-topic>
    <!-- 我是有底线的 -->
    <end></end>
  </div>
</template>
<script>
import Head from "../components/home/Head.vue";
import Slideshow from "../components/home/Slideshow.vue";
import Guarantee from "../components/home/Guarantee.vue";
import Special from "../components/home/Special.vue";
import Welfare from "../components/home/Welfare.vue";
import LimitTimePurchase from "../components/home/LimitTimePurchase.vue";
import Healthy from "../components/home/Healthy.vue";
import HotTopic from "../components/home/HotTopic.vue";
import End from "../components/home/End.vue";
export default {
  data() {
    return {
      dataList: []
    };
  },
  components: {
    "app-head": Head,
    slideshow: Slideshow,
    guarantee: Guarantee,
    "goods-special": Special,
    welfare: Welfare,
    "limit-time-purchase": LimitTimePurchase,
    healthy: Healthy,
    "hot-topic": HotTopic,
    end: End
  },
  methods: {
    jumpDetail(idx) {
      this.$router.push({
        path: "/detail",
        query: {
          goods_id: idx
        }
      });
    }
  },
  async created() {
    // const datas = await this.$axios("http://127.0.0.1:1904/goods?id=123");
    // const datas = await this.$axios.post("http://127.0.0.1:1904/cart",{
    //   username:'ganliyun1',
    //   goods_id:'1',
    //   goods_name:'迪巧',
    //   goods_img:'pin1.png',
    //   price:1233,
    //   num:12333,
    // });
    // console.log(datas.data.data);
    // const datas = await this.$axios.get("http://127.0.0.1:1904/cart/ganliyun2");
    // console.log(datas);
    // this.dataList.push(datas.data.data[2]);
    // console.log(this.dataList);
    // var
    // var a = ''
  }
  // var obj="";
};
</script>
<style lang="scss" scoped>
#home {
  position: relative;
  padding-top: 1.2rem;
  padding-bottom: 1.333333rem;
  // padding-top: 1.333333rem;
}
</style>


