<template>
  <div id="search">
      <Head></Head>
      <Searchlist v-show="false"></Searchlist>
      <Store></Store>
  </div>
</template>
<script>
import Head from "../components/search/Head.vue";
import Store from "../components/search/Store.vue";
import Searchlist from "../components/search/Searchlist.vue";
export default {
   components: {
      Head,
      Searchlist,
      Store,
      
  }
};
</script>
<style lang="scss" scoped>
#search{
  position: relative;
}
</style>