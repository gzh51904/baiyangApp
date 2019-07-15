<template>
    <div class="order_top">
        <div class="title">
            <a href="javascript:;">
                <h3>我的订单</h3>
                <h5 v-on:click="tianzhuan()">查看全部&gt;</h5>
            </a>
        </div>
        <div class="order1">
            <ul class="order_list">
                <li class="list_item">
                    <a href="javascript:;">
                        <i class="iconfont icon-daifukuan"></i>
                        <p>待付款</p>
                    </a>
                </li>
                <li class="list_item">
                    <a href="javascript:;">
                        <i class="iconfont icon-daifahuo"></i>
                        <p>待发货</p>
                    </a>
                </li>
                <li class="list_item">
                    <a href="javascript:;">
                        <i class="iconfont icon-daishouhuo"></i>
                        <p>待收货</p>
                    </a>
                </li>
                <li class="list_item">
                    <a href="javascript:;">
                        <i class="iconfont icon-pingjia"></i>
                        <p>好评有礼</p>
                    </a>
                </li>
                <li class="list_item">
                    <a href="javascript:;">
                        <i class="iconfont icon-tuihuo"></i>
                        <p>退款/退货</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    tianzhuan: function() {
      this.$router.push({ name: "order" });
    }
  }
};
</script>
<style lang="scss" scoped>
.order_top {
  width: 100%;
  height: 2.933333rem;
  background: #fff;
  margin-bottom: 0.28rem;
  padding-left: 0.28rem;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 1.146667rem;
    border-bottom: 2px solid #dedede;
    a {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 0.56rem;
      h3 {
        height: 0.56rem;
        font-size: 0.373333rem;
        color: #000;
        line-height: 0.56rem;
        font-weight: 600;
      }
      h5 {
        margin-right: 0.466667rem;
        height: 0.56rem;
        font-size: 0.32rem;
        color: #9d9d9d;
        line-height: 0.56rem;
      }
    }
  }
  .order1 {
    padding: 0.106667rem 0;
    height: 1.786667rem;
    width: 100%;
    .order_list {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 100%;
      .list_item {
        flex: 1;
        padding-top: 0.293333rem;
        height: 100%;
        a {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 100%;
          .iconfont {
            margin-bottom: 0.186667rem;
            font-size: 0.533333rem;
            color: #666666;
          }
          p {
            font-size: 0.306667rem;
            color: #000;
            line-height: 0.306667rem;
          }
        }
      }
    }
  }
}
</style>


