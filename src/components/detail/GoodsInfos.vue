<template>
  <div class="goods_infos">
    <div class="goods_infos_inner" v-for="(item,index) in goodsInfos" :key="index">
      <!-- 价格 -->
      <div class="goods_price">
        <span class="current_price">￥{{item.cur_price}}</span>
        <del class="origin_price">￥{{item.ori_price}}</del>
      </div>
      <!-- 名字 -->
      <div class="goods_name">
        <p>自营</p>
        <h3 v-text="item.name"></h3>
      </div>
      <!-- 描述 -->
      <p class="goods_des" v-text="item.des"></p>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    goodsInfos: {
      type: Array
    }
  },
  created(){
    // console.log(this.goodsInfos);
  }
};
</script>
<style lang="scss" scoped>
.goods_infos {
  padding: 0 0.266667rem;
  background: #fff;
  margin-bottom: 0.28rem;
  .goods_price {
    //   padding: 0 0.266667rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 1.653333rem;
    //   background: #fff;
    .current_price {
      // padding: 0 0.266667rem;
      margin-right: 0.36rem;
      font-size: 0.506667rem;
      color: #ff0066;
      font-weight: 800;
    }
    .origin_price {
      // padding: 0 0.266667rem;
      display: block;
      margin-top: 0.213333rem;
      font-size: 0.24rem;
      color: #999999;
      font-weight: 800;
    }
  }

  .goods_name {
    margin-bottom: 0.24rem;
    //   background: #fff;
    p {
      display: inline-block;
      width: 1.106667rem;
      height: 0.493333rem;
      background: #ff0066;
      border-radius: 0.173333rem;
      font-size: 0.4rem;
      color: #fff;
      text-align: center;
      line-height: 0.493333rem;
    }
    h3 {
      display: inline;
      font-size: 0.4rem;
      color: #000;
      line-height: 0.48rem;
      font-weight: 600;
    }
  }

  .goods_des {
    //   background: #fff;
    font-size: 0.333333rem;
    color: #666666;
    line-height: 0.506667rem;
    //   background: #fff;
  }
}
</style>


