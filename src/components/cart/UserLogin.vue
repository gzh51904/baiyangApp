<template>
    <div class="user_login" @click="jumpToLoginPage()">
        <a href="javascript:;">登录</a>
        <p>登录后查看电脑与手机购物车中的商品</p>
    </div>
</template>
<script>
export default {
  methods:{
    jumpToLoginPage(){
      this.$router.push({
        path:'/login'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.user_login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1.24rem;
  border-bottom: 0.026667rem solid #ccc;
  background: #fff;
  a {
    margin-right: 0.133333rem;
    display: block;
    width: 1.346667rem;
    height: 0.666667rem;
    border: 0.013333rem solid #ff0066;
    font-size: 0.333333rem;
    color: #ff0066;
    line-height: 0.64rem;
    text-align: center;
  }
  a:hover {
    text-decoration: none;
  }
  p {
    font-size: 0.333333rem;
    color: #000;
    line-height: 1.32rem;
  }
}
</style>


