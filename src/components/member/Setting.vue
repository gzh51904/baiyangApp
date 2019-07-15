<template>
    <section id="set">
        <div class="shezhi">
            <img src="../../assets/img/arrow_left_b.png"  alt="" v-on:click="tianzhuan()">
            <div class="shezhi_c">设置</div>
            <div class="shehzi_r">. . .</div>
        </div>
        <ul class="container">
            <li >
                <div class="inp"><p>登录密码</p><p>建议您定期更改密码以保护帐号安全</p></div>
                <div>〉</div>
            </li>
            <li >
                <div class="inp"><p>手机验证</p><p>若你的手机已丢失或停用,请立即修改更换</p></div>
                <div>134****8226〉</div>
            </li>       
            <li >
                <div class="inp"><p>实名验证</p><p>用于跨境订单清关</p></div>
                <div>〉</div>
            </li>    
            <li>
                <div class="inp"><p>支付密码</p><p>建议您设置复杂的支付密码保护帐号全额安全</p></div>
                <div>未设置〉</div>
            </li>
        </ul>
        <div class="fankui">
            <div class="fan"><p>用户反馈</p><p>您在使用中遇到的问题与建议可向我们反馈</p></div>
            <div>〉</div>
        </div>
        <div class="exit">安全退出</div>
    </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    tianzhuan: function() {
      this.$router.push({ name: "member" });
    }
  }
};
</script>
<style lang="scss" scoped>
#set {
  width: 100%;
  background-color: #fff;
  // #f5f5f5;
}
.shezhi {
  display: flex;
  height: 1.093333rem;
  // border-bottom: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.24rem;
  img {
    height: 0.4rem;
    width: 0.4rem;
  }
  .shezhi_c {
    width: 2rem;
    text-align: center;
    line-height: 100%;
    font-size: 0.48rem;
    color: #000;
  }
  .shezhi_r {
    width: 140px;
    // display: flex;
    // justify-content: space-between;
    // align-items: flex-start;
    font-size: 0.666667rem;
    color: #000;
  }
}
.container {
  padding: 0 0.066667rem;
  li {
    height: 1.706667rem;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.346667rem;
  }
}
.inp {
  width: 6.666667rem;
  padding-top: 0.266667rem;
  padding: 0 0.266667rem;
  & p:first-child {
    font-size: 0.373333rem;
    color: #000;
    margin-bottom: 0.066667rem;
  }
  & p:last-child {
    font-size: 0.266667rem;
    color: #999;
  }
}
.fankui {
  // margin-top: 0.266667rem;
  padding-top: 0.266667rem;
  padding: 0 0.266667rem;
  height: 1.706667rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.346667rem;
  .fan {
    width: 6.666667rem;
    // padding-top: 0.293333rem;
    & p:first-child {
      font-size: 0.373333rem;
      color: #000;
      margin-bottom: 0.066667rem;
    }
    & p:last-child {
      font-size: 0.266667rem;
      color: #999;
    }
  }
}
.exit {
  // padding-top: 0.4rem;
  margin: 0 0.266667rem;
  margin-top: 0.4rem;
  background-color: #ff0066;
  height: 1.013333rem;
  text-align: center;
  line-height: 1.013333rem;
  font-size: 0.426667rem;
  color: #fff;
}
</style>
