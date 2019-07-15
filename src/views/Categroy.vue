<template>
  <div id="categroy">
    <categroy-head></categroy-head>
    <main class="main">
      <categroy-nav></categroy-nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script>
import Nav from "../components/categroy/Nav.vue";
import Head from "../components/categroy/Head.vue";

export default {
  components: {
    "categroy-head": Head,
    "categroy-nav": Nav
  }
};
</script>
<style lang="scss" scoped>
#categroy {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1.333333rem;
    .content {
      flex: 1;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>