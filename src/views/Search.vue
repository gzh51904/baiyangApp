<template>
  <div id="search">
      <Head></Head>
      <Searchlist v-show="show"></Searchlist>
      <Store></Store>
  </div>
</template>
<script>
import Head from "../components/search/Head.vue";
import Store from "../components/search/Store.vue";
import Searchlist from "../components/search/Searchlist.vue";
export default {
  data(){
    return{
      show:true
    }
  },
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