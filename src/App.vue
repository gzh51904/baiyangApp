<template>
  <div id="app">
    <router-view></router-view>
    <app-foot></app-foot>
  </div>
</template>
<script>
import Foot from "./components/Foot.vue";
import { rem } from "./assets/js/rem.js";

export default {
  components: {
    "app-foot": Foot
  },
  created() {
    rem();
  }
};
</script>
<style>
@import url(./assets/css/base.css);
@import url(./assets/iconfont/iconfont.css);
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
