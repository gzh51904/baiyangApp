<template>
  <section class="home_special">
    <ul class="special_list">
      <li v-for="item in special" :key="item.branch_idtype_id" class="list_item" @click="jumpToSpecialPage(item.branch_id)">
        <a href="javascript:;">
          <div class="special_img">
            <img :src="item.img_url" alt="#">
          </div>
          <p v-text="item.name" class="special_name"></p>
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
          branch_id: 0,
          img_url: require("../../assets/img/special1.png"),
          name: "中西药品"
        },
        {
          branch_id: 1,
          img_url: require("../../assets/img/special2.png"),
          name: "母婴健康"
        },
        {
          branch_id: 2,
          img_url: require("../../assets/img/special3.png"),
          name: "正品保障"
        },
        {
          branch_id: 3,
          img_url: require("../../assets/img/special4.png"),
          name: "营养保健"
        },
        {
          branch_id: 4,
          img_url: require("../../assets/img/special5.png"),
          name: "美妆个护"
        }
      ]
    };
  },
  methods: {
    jumpToSpecialPage(branch_id) {
      this.$router.push({
        path: "special",
        query: {
          branch_id: branch_id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home_special {
  margin-bottom: 0.32rem;
  width: 100%;
  height: 1.8rem;
  .special_list {
    display: flex;
    flex-direction: row;
    // justify-content:
    align-items: center;
    width: 100%;
    height: 100%;
    .list_item {
      flex: 1;
      height: 100%;
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        .special_img {
          width: 1.386667rem;
          height: 1.386667rem;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .special_name {
          height: 0.32rem;
          //   width: 100%;
          font-size: 0.32rem;
          color: #000;
          line-height: 0.32rem;
          text-align: center;
        }
      }
    }
  }
}
</style>


