<template>
  <section class="swiper-container" style="height:10rem;width:100%;">
    <div class="swiper-wrapper" style="height:10rem;width:100%;">
      <div class="swiper-slide" style="height:10rem;width:100%;" v-for="(item,index) in slidePics" :key="index">
        <img class="img" style="height:10rem;width:100%;" :src="item">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </section>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
     
    };
  },
  props: {
    slidePics: {
      type: Array
    }
  },
  // created(){
  //   console.log("轮播图");
  //   console.log(this.slidePics);
  //   // for(var i = 0; i < this.slidePics)
  //   this.slidePics.map(function(item){

  //     require("../../assets/"+item);
  //   });
  //   // require();
  // },
  // async created() {
  //   let { data } = await this.$axios.get("http://127.0.0.1:1904/goods");
  //   // console.log("data:", data);
  // console.log(data.data);
  //   this.recommed = data.data.slice(0, 20).map(item => {
  //     item.img_url = require("../../assets/api_img/" + item.img_url); // ../assets/img/xxx.jpg
  //     return item;
  //   });
  //   // console.log(this.recommed);
  //   // // console.log(th);
  // },

  computed: {
    // getUrl(item) {
    //   return require("assets/img/api_img/" + item);
    // } // getUrl(item) {
    //   // return require("assets/img/api_img/" + item);
    // }
  },
  // created(){
  //   // console.log('123');
  //   // console.log(this.slidePics);
  // },
  mounted() {
    // console.log('图片');
    // console.log(this.slidePics);
    // console.log(this.slidePics);
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  margin-bottom: 0.2rem;
}
</style>


