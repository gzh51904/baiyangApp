<template>
    <section class="weishengsu">
        <div class="pic_box">
            <ul class="pic_list">
                <li class="pic_item" v-for="item in pics" :key="item.id" :class="item.id">
                    <a href="javascript:;">
                        <img :src="item.img_url" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      pics: [
        {
          id: "A",
          name: "维生素A",
          img_url: require("../../assets/img/categroy/weishengsu_1.png")
        },
        {
          id: "B",
          name: "维生素B",
          img_url: require("../../assets/img/categroy/weishengsu_2.png")
        },
        {
          id: "C",
          name: "维生素C",
          img_url: require("../../assets/img/categroy/weishengsu_3.png")
        },
        {
          id: "D",
          name: "维生素D",
          img_url: require("../../assets/img/categroy/weishengsu_5.png")
        },
        {
          id: "E",
          name: "维生素E",
          img_url: require("../../assets/img/categroy/weishengsu_6.png")
        },
        {
          id: "K",
          name: "K",
          img_url: require("../../assets/img/categroy/weishengsu_7.png")
        },
        {
          id: "Q",
          name: "维生素Q",
          img_url: require("../../assets/img/categroy/weishengsu_4.png")
        },
        {
          id: "Fe",
          name: "维生素Fe",
          img_url: require("../../assets/img/categroy/weishengsu_8.png")
        },
        {
          id: "Cal",
          name: "维生素Cal",
          img_url: require("../../assets/img/categroy/weishengsu_11.png")
        },
        {
          id: "Zn",
          name: "维生Zn",
          img_url: require("../../assets/img/categroy/weishengsu_9.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.weishengsu {
  padding-left: 0.373333rem;
  padding-top: 0.373333rem;
  padding-bottom: .4rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .pic_box {
    width: 6.72rem;
    .pic_list {
        position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      .pic_item {
        width: 100%;
        height: 2.426667rem;
        a {
          display: block;
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .Fe {
        // width: 3.333333rem;
        width: 49%;
        height: 1.526667rem;
      }
      .Zn {
          position: absolute;
          left: 0;
          bottom: 0;
        // width: 3.333333rem;
        width: 49%;
        height: 1.526667rem;
      }
      .Cal {
        width: 3.333333rem;
        height: 3.053333rem;
      }
    }
  }
}
</style>

