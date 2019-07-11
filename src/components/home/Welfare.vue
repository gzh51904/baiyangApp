<template>
    <section class="welfare">
        <div class="welfare" v-for="(item,index) in welfare" :key="item.id" :class="index===0?'welfare1':(index===1?'welfare2':'welfare3')">
            <img :src="item.img_url" alt="#">
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      welfare: [
        {
          id: "1",
          img_url: require("../../assets/img/w1.png")
        },
        {
          id: "2",
          img_url: require("../../assets/img/w2.png")
        },
        {
          id: "3",
          img_url: require("../../assets/img/w3.png")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.welfare {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .welfare1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 0.266667rem;
    width: 100%;
    height: 2.106667rem;
    img {
      height: 100%;
    }
  }
  .welfare2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 1.88rem;
    img {
      height: 100%;
    }
  }
  .welfare3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 1.88rem;
    img {
      height: 100%;
    }
  }
}
</style>


