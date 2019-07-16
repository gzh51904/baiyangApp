<template>
  <div class="graphic_details">
    <div class="title">
      <p class="line"></p>
      <h3>图文详情</h3>
      <p class="line"></p>
    </div>
    <div class="goods_information_pic">
      <div class="pic" v-for="(item,index) in goodsDesPics" :key="index">
        <img :src="item" alt="#">
      </div>
    </div>
  </div>
</template>
<script>
export default {
   props: {
      goodsDesPics: {
        type: Array,
      }
    },
};
</script>

<style lang="scss" scoped>
.graphic_details {
  padding: 0 0.266667rem;
  width: 100%;
  background: #fff;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.133333rem;
    width: 100%;
    height: 0.586667rem;
    .line {
      margin: 0 0.333333rem;
      width: 1.68rem;
      height: 0.026667rem;
      border: 0.026667rem solid #dddddd;
    }
    h3 {
      font-size: 0.333333rem;
      color: #000;
      line-height: 0.4rem;
      text-align: center;
    }
  }
  .goods_information_pic {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>

