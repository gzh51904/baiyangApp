<template>
    <section class="home_health">
        <div class="title">
            <h2>健康大牌</h2>
        </div>
        <ul class="goods_list">
            <li class="list_item" v-for="item in special" :key="item.branch_id" @click="jumpToSpecialPage(item.branch_id)">
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
      special: [
        {
          branch_id: 6,
          img_url: require("../../assets/img/special6.png"),
          name: "艾思诺娜"
        },
        {
          branch_id: 7,
          img_url: require("../../assets/img/special7.png"),
          name: "珂润"
        },
        {
          branch_idtype_id: 8,
          img_url: require("../../assets/img/special8.png"),
          name: "宠爱之名"
        },
        {
          branch_id: 9,
          img_url: require("../../assets/img/special9.png"),
          name: "Schiff"
        },
        {
          branch_id: 10,
          img_url: require("../../assets/img/special10.png"),
          name: "纽特舒玛"
        },
        {
          branch_id: 11,
          img_url: require("../../assets/img/special11.png"),
          name: "蜜浓"
        },
        {
          branch_id: 12,
          img_url: require("../../assets/img/special12.png"),
          name: "咖思美"
        },
        {
          branch_id: 13,
          img_url: require("../../assets/img/special13.png"),
          name: "来益"
        },
        {
          branch_id: 14,
          img_url: require("../../assets/img/special14.png"),
          name: "迪巧"
        }
      ]
    };
  },
  methods: {
    jumpToSpecialPage(branch_id) {
      this.$router.push({
        path: "/special",
        query: {
          branch_id: branch_id
        }
      });
    }
  },
  created() {
    // this.
  }
};
</script>
<style lang="scss" scoped>
.home_health {
  padding: 0 0.293333rem;
  .title {
    padding-left: 0.373333rem;
    height: 1.16rem;
    h2 {
      height: 0.933333rem;
      font-size: 0.466667rem;
      color: #000;
      line-height: 0.933333rem;
      font-weight: 600;
    }
  }
  .goods_list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    .list_item {
      margin-bottom: 0.266667rem;
      width: 31.5%;
      a {
        display: block;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>


