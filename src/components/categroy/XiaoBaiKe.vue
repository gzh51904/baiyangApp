<template>
    <section class="xiaobaike">
        <ul class="pic_list">
            <li class="pic_item" v-for="(item,index) in pics" :key="item.id" @click="jumpPage(index)">
                <a href="javascript:;">
                    <img :src="item.text_url" alt="#">
                </a>
                <a href="javascript:;">
                    <img :src="item.img_url" alt="#">
                </a>
            </li>
        </ul>

    </section>
</template>
<script>
export default {
  data() {
    return {
      pics: [
        {
          id: "danao",
          title: "大脑",
          text_url: require("../../assets/img/categroy/baike_1.png"),
          img_url: require("../../assets/img/categroy/baike_2.png")
        },
        {
          id: "xinzang",
          title: "心脏",
          text_url: require("../../assets/img/categroy/baike_3.png"),
          img_url: require("../../assets/img/categroy/baike_4.png")
        },
        {
          id: "fei",
          title: "肺",
          text_url: require("../../assets/img/categroy/baike_5.png"),
          img_url: require("../../assets/img/categroy/baike_6.png")
        },
        {
          id: "wei",
          title: "胃",
          text_url: require("../../assets/img/categroy/baike_7.png"),
          img_url: require("../../assets/img/categroy/baike_8.png")
        },
        {
          id: "ganzang",
          title: "肝脏",
          text_url: require("../../assets/img/categroy/baike_9.png"),
          img_url: require("../../assets/img/categroy/baike_10.png")
        },
        {
          id: "shenzang",
          title: "肾脏",
          text_url: require("../../assets/img/categroy/baike_11.png"),
          img_url: require("../../assets/img/categroy/baike_12.png")
        },
        {
          id: "guanjia",
          title: "关节",
          text_url: require("../../assets/img/categroy/baike_13.png"),
          img_url: require("../../assets/img/categroy/baike_14.png")
        },
        {
          id: "guge",
          title: "骨骼",
          text_url: require("../../assets/img/categroy/baike_15.png"),
          img_url: require("../../assets/img/categroy/baike_16.png")
        }
      ]
    };
  },
  methods: {
    jumpPage(idx) {
      console.log(idx);
    }
  }
};
</script>
<style lang="scss" scoped>
.xiaobaike {
  padding-top: 0.306667rem;
  padding-left: 0.373333rem;
  width: 1000%;
  height: 100%;
  .pic_list {
    width: 6.72rem;
    .pic_item {
      margin-bottom: 0.053333rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 1.493333rem;
      a {
        display: block;
        width: 3.333333rem;
        height: 100;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>


