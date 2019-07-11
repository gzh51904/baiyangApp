<template>
    <div class="order_bottom">
        <ul class="asset_list">
            <li class="list_item">
                <a href="javascript:;">
                    <div class="icon icon_addr">
                        <i class="iconfont icon-shouhuodizhi"></i>
                    </div>
                    <p>收货地址</p>
                </a>
            </li>
            <li class="list_item">
                <a href="javascript:;">
                    <div class="icon icon_youhui">
                        <i class="iconfont icon-youhuijuan"></i>
                    </div>
                    <p>优惠卷</p>
                </a>
            </li>
            <li class="list_item">
                <a href="javascript:;">
                    <div class="icon icon_qianbao">
                        <i class="iconfont icon-wallet"></i>
                    </div>
                    <p>我的钱包</p>
                </a>
            </li>
            <li class="list_item">
                <a href="javascript:;">
                    <div class="icon icon_fuwu">
                        <i class="iconfont icon-shouhoufuwu"></i>
                    </div>
                    <p>售后服务</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.order_bottom {
  width: 100%;
  height: 2.186667rem;
  background: #fff;
  .asset_list {
    display: flex;
    flex-direction: row;
    align-items: center;
    .list_item {
      flex: 1;
      height: 100%;
      padding-top: 0.413333rem;
      padding-bottom: 0.293333rem;
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        height: 100%;
        .icon {
          width: 0.933333rem;
          height: 0.933333rem;
          border-radius: 50%;
          // background: red;
          text-align: center;
          line-height: 0.933333rem;
          .iconfont {
            font-size: 0.48rem;
            color: #fff;
          }
        }
        .icon_addr {
          background: #71aaff;
        }
        .icon_youhui {
          background: #fa5552;
        }
        .icon_qianbao {
          background: #ffcf11;
        }
        .icon_fuwu {
          background: #f39800;
        }
        p {
          font-size: 0.293333rem;
          color: #000;
          line-height: 0.453333rem;
        }
      }
    }
  }
}
</style>


