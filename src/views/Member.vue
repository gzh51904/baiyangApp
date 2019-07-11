<template>
  <section id="member">
    <!-- 设置 -->
    <member-set></member-set>
    <!-- 用户登录注册 -->
    <main class="member_main">
      <member-login-register></member-login-register>
      <order-top></order-top>
      <order-bottom></order-bottom>
    </main>

  </section>
</template>
<script>
import MemberSet from "../components/member/MemberSet.vue";
import MemberLoginRegister from "../components/member/MemberLoginRegister";
import OrderTop from '../components/member/OrderTop.vue';
import OrderBottom from '../components/member/OrderBottom.vue';


export default {
  components: {
    "member-set": MemberSet,
    "member-login-register": MemberLoginRegister,
    "order-top":OrderTop,
    "order-bottom":OrderBottom
  }
};
</script>
<style lang="scss" scoped>
#member {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.333333rem;
  width: 100%;
  height: 100%;
  .member_main {
    width: 100%;
    flex: 1;
    background: #f5f5f5;
  }
}
</style>
