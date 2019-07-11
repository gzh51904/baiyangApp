<template>
    <section class="swiper-container" style="height:4.506667rem;width:100%;">
        <div class="swiper-wrapper" style="height:4.506667rem;width:100%;">
            <div class="swiper-slide" style="height:4.506667rem;width:100%;" v-for="(item,index) in pic" :key="index">
                <img class="img" style="4.506667rem;width:100%;" :src="item.img_url">
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
            "https:shopncstaticimage.baiyangwang.com/mobile/special/s0/s0_06143362170983983.jpg!hthumb"
        },
        {
          img_url:
            "https://shopncstaticimage.baiyangwang.com/mobile/special/s0/s0_06137365226052927.jpg!hthumb"
        },
        {
          img_url:
            "https://shopncstaticimage.baiyangwang.com/mobile/special/s0/s0_06114220769444154.jpg!hthumb"
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

