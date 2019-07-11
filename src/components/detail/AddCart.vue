<template>
    <div class="add_cart_box">
        <div class="left">
            <a href="javascript:;" class="kefu">
                <i class="iconfont icon-kefu"></i>
                <p>客服</p>
            </a>
            <a href="javascript:;" class="cart">
                <i class="iconfont icon-cart"></i>
                <p>购物车</p>
            </a>
        </div>
        <div class="right">
            <a href="javascript:;" class="add_cart_btn">加入购物车</a>
            <a href="javascript:;" class="buy_now_btn">立即购买</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.add_cart_box {
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 1.373333rem;
  border-top: 0.026667rem solid #dddddd;
  border-bottom: 0.026667rem solid #dddddd;
  background: #fff;
  .left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 31%;
    height: 100%;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 1.12rem;
      height: 100%;
      .iconfont {
        margin: 0.133333rem;
        font-size: 0.466667rem;
        color: #666666;
      }
      p {
        height: 0.28rem;
        font-size: 0.28rem;
        color: #666666;
        line-height: 0.28rem;
      }
    }
    .kefu {
      width: 47%;
    }
    .cart {
      width: 53%;
      border-left: 0.026667rem solid #dddddd;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 69%;
    height: 100%;
    a {
      display: block;
      width: 50%;
      height: 100%;
      font-size: 0.453333rem;
      line-height: 1.32rem;
      color: #fff;
      font-weight: 600;
      text-align: center;
    }
    .add_cart_btn {
      background: #333333;
    }
    .buy_now_btn {
      background: #ff0066;
    }
  }
}
</style>

