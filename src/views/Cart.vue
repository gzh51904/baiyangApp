<template>
  <section id="baiyang_cart">
    <!-- 头部 -->
    <cart-head></cart-head>
    <!-- 用户登录 -->
    <user-login></user-login>
    <!-- 购物车为空 -->
    <cart-empty></cart-empty>
    <!-- 购物车商品 -->
    <cart-goods></cart-goods>
  </section>
</template>
<script>
import Head from "../components/cart/Head.vue";
import CartEmpty from "../components/cart/CartEmpty.vue";
import UserLogin from "../components/cart/UserLogin.vue";
import CartGoods from "../components/cart/CartGoods.vue";
export default {
  components: {
    "cart-head": Head,
    "cart-empty": CartEmpty,
    "user-login": UserLogin,
    "cart-goods": CartGoods
  }
};
</script>
<style lang="scss" scoped>
#baiyang_cart {
  padding-bottom: 40%;
  padding-top: 1.146667rem;
  min-height: 100%;
  width: 100%;
  background: #f5f5f5;
}
</style>