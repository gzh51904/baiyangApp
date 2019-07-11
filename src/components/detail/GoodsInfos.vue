<template>
    <div class="goods_infos">
        <!-- 价格 -->
        <div class="goods_price">
            <span class="current_price">￥2333</span>
            <del class="origin_price">￥3333</del>
        </div>
        <!-- 名字 -->
        <div class="goods_name">
            <p>自营</p>
            <h3>【逆龄黑科技】Quanis/克奥妮斯玻尿酸微针眼贴1300针（1对装）淡化黑眼圈眼袋细纹日本进口</h3>
        </div>
        <!-- 描述 -->
        <p class="goods_des">【眼膜界的爱马仕】运用透皮给药技术，将1300根可溶微针直接注入肌肤真皮层，深层滋养肌肤，改善眼周问题，抚平岁月痕迹</p>
    </div>
</template>
<script>
export default {};
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


