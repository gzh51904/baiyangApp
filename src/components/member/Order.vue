<template>
    <section id="order">
        <div class="dingdan">
            <img src="../../assets/img/arrow_left_b.png"  alt="" v-on:click="tianzhuan()">
            <div class="dingd_c">我的订单</div>
            <div class="dingd_r"><i class="iconfont icon-search"></i><i class="iconfont icon-sandian"></i></div>
        </div>
        <div class="pay_all">
            <div class="box">
            <a href="javascript:;" @click="changTab(0)" v-bind:class="{liang:active===0}">全部</a>
            <a href="javascript:;" @click="changTab(1)">待付款</a>
            <a href="javascript:;" @click="changTab(2)">待发货</a>
            <a href="javascript:;" @click="changTab(3)">待收货</a>
            <a href="javascript:;" @click="changTab(4)">待评价</a>
            </div>
        </div>
        <div class="content">
            <quan-bu v-show="active===0"></quan-bu>
            <fu-kuan v-show="active===1"></fu-kuan>
            <fa-huo v-show="active===2"></fa-huo>
            <shou-huo v-show="active===3"></shou-huo>
            <comment v-show="active===4"></comment>
        </div>

    </section>
</template>
<script>
import QuanBu from "../member/QuanBu.vue";
import Fukuan from "../member/Fukuan.vue";
import FaHuo from "../member/FaHuo.vue";
import ShouHuo from "../member/ShouHuo.vue";
import comment from "../member/comment.vue";

export default {
  data() {
    return {
      active: 0,
      tabs: [{}, {}, {}, {}, {}]
    };
  },
  methods: {
    changTab(num) {
      this.active = num;
      console.log(this.active);
    },
    tianzhuan: function() {
      this.$router.push({ name: "member" });
    }
  },
  components: {
    "quan-bu": QuanBu,
    "fu-kuan": Fukuan,
    "fa-huo": FaHuo,
    "shou-huo": ShouHuo,
    comment: comment
  }
};
</script>
<style lang="scss" scoped>
#order {
  width: 100%;
}
.dingdan {
  display: flex;
  height: 1.093333rem;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.133333rem 0 0.24rem;
  img {
    height: 0.4rem;
    width: 0.4rem;
  }
  .dingd_c {
    width: 2rem;
    text-align: center;
    line-height: 100%;
    font-size: 0.426667rem;
    color: #000;
  }
  .dingd_r {
    margin-left: -0.4rem;
    width: 1.866667rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 0.066667rem;
  }
}
.pay_all {
  overflow: auto;
  font-size: 0.48rem;
  .box {
    width: 105%;
    display: flex;
    font-size: 0.426667rem;
    height: 1.133333rem;
    border-bottom: 0.013333rem solid #999;
    a {
      margin: 0.32rem 0.4rem 0 0.4rem;
      text-decoration: none;
      height: 0.8rem;
      color: #333333;
      &:hover {
        margin: 0;
        height: 1.133333rem;
        margin: 0 0.2rem;
        padding: 0.32rem 0.2rem 0 0.2rem;
        color: #ff0066;
        border-bottom: 2px solid #ff0066;
      }
      &.liang {
        margin: 0;
        height: 1.133333rem;
        margin: 0 0.2rem;
        padding: 0.32rem 0.2rem 0 0.2rem;
        color: #ff0066 !important;
        border-bottom: 2px solid #ff0066;
      }
    }
  }
}
</style>

