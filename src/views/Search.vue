<template>
  <div id="search">
    <Head @pass="pass"></Head>
    <Searchlist v-show="show"></Searchlist>
    <Store></Store>
  </div>
</template>
<script>
import Head from "../components/search/Head.vue";
import Store from "../components/search/Store.vue";
import Searchlist from "../components/search/Searchlist.vue";
export default {
  data() {
    return {
      show: true,
      current: ""
    };
  },
  methods: {
    pass(current) {
      // console.log(2);
      // console.log(current);
      //currentIndex是在data()中定义好的
      this.current = current;
      console.log(this.current);
      if (this.current == "") {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  },
  components: {
    Head,
    Searchlist,
    Store
  }
};
</script>
<style lang="scss" scoped>
#search {
  position: relative;
}
</style>