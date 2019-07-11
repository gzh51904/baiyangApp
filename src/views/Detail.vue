<template>
  <section id="baiyang_detail">
    <!-- 头部 -->
    <detail-head></detail-head>
    <!-- 轮播图 -->
    <slideshow></slideshow>
    <!-- 商品相关信息 -->
    <goods-infos></goods-infos>
    <!-- 运输相关信息 -->
    <transport-infos></transport-infos>
    <!-- 买家评价 -->
    <buyer-evaluation></buyer-evaluation>
    <!-- 走进品牌 -->
    <enter-brand></enter-brand>
    <!-- 相关推荐 同类热销推荐 -->
    <goods-recommend></goods-recommend>
    <!-- 图文详情 -->
   <graphic-details></graphic-details>
   <!-- 加入购物车 立即购买 -->
   <add-cart></add-cart>
  </section>
</template>
<script>
import Head from '../components/detail/Head.vue';
import SlideShow from '../components/detail/Slideshow.vue';
import GoodsInfos from '../components/detail/GoodsInfos.vue';
import Transport from '../components/detail/Transport.vue';
import Evaluation from '../components/detail/Evaluation.vue';
import EnterBrand from '../components/detail/EnterBrand.vue';
import GoodsRecommend from '../components/detail/GoodsRecommend.vue';
import GraphicDetails from '../components/detail/GraphicDetails.vue';
import AddCart from '../components/detail/AddCart.vue';
export default {
  components:{
    'detail-head':Head,
    'slideshow':SlideShow,
    'goods-infos':GoodsInfos,
    'transport-infos':Transport,
    'buyer-evaluation':Evaluation,
    'enter-brand':EnterBrand,
    'goods-recommend':GoodsRecommend,
    'graphic-details':GraphicDetails,
    'add-cart':AddCart
  }
}
</script>
<style lang="scss" scoped>
#baiyang_detail{
  position: relative;
  padding-top: 1.093333rem;
  padding-bottom: 1.333333rem;
  background: #f5f5f5;
}

</style>