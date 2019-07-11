<template>
  <div id="Categroy">
    <!-- 搜索 -->
    <!-- <C-search></C-search> -->
    <categroy-head></categroy-head>
    <main class="main">
      <C-center></C-center>
    </main>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, Navbar, TabItem } from "mint-ui";
Vue.component(Search.name, Search);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import "mint-ui/lib/style.css";
// import search from "../components/categroy/search.vue";

import center from "../components/categroy/center.vue";
import Head from "../components/categroy/Head.vue";

export default {
  components: {
    // "C-search": search,
    "C-center": center,
    "categroy-head": Head
  }
};
</script>
<style lang="scss" scoped>
#categroy {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  .main {
    width: 100%;
    padding-left: 2.04rem;
    padding-top: 1.146667rem;
    padding-bottom: 1.2rem;
  }
  // .main{
  //   flex: 1;
  //   height:
  // }

  // height: 100%;
}
</style>