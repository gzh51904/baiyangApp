<template>
    <section class="swiper-container" style="height:10rem;width:100%;">
        <div class="swiper-wrapper" style="height:10rem;width:100%;">
            <div class="swiper-slide" style="height:10rem;width:100%;" v-for="(item,index) in pic" :key="index">
                <img class="img" style="height:10rem;width:100%;" :src="item.img_url">
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
      pic: [
        {
          img_url:
            "https://shopncstaticimage.baiyangwang.com/shop/store/goods/1/1_05985499465097819.jpg"
        },
        {
          img_url:
            "https://shopncstaticimage.baiyangwang.com/shop/store/goods/1/1_05985499570852347.jpg"
        },
        {
          img_url:
            "https://shopncstaticimage.baiyangwang.com/shop/store/goods/1/1_05985499545851633.jpg"
        },
        {
          img_url:
            "https://shopncstaticimage.baiyangwang.com/shop/store/goods/1/1_05985499521569825.jpg"
        }
      ]
    };
  },
  mounted() {
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
.swiper-container{
  margin-bottom: 0.2rem;
}
</style>


