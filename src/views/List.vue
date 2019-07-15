<template>
  <div id="list">
      <Head></Head>
      <Nav></Nav>
      <Main></Main>
  </div>
</template>
<script>
import Head from "../components/list/Head.vue";
import Nav from "../components/list/Nav.vue";
import Main from "../components/list/Main.vue";

export default {
   components: {
      Head,
      Nav,
      Main
  }
};
</script>
<style lang="scss" scoped>
#search{
  position: relative;
}
</style>