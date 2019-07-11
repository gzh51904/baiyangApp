<template>
  <div id="home">
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
  components: {
    "app-head": Head,
    slideshow: Slideshow,
    guarantee: Guarantee,
    "goods-special": Special,
    welfare: Welfare,
    "limit-time-purchase": LimitTimePurchase,
    healthy:Healthy,
    "hot-topic":HotTopic,
    end:End
  }
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


