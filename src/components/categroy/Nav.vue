<template>
  <nav class="categroy_nav">
    <li class="nav_item" v-for="(item,index) in NavItems" :key="item.id" :class="now===index?'active':''" @click="changeNavItem(index)">
      <a href="javascript:;">
        <span class="cn" v-text="item.cn"></span>
        <span class="en" v-text="item.en"></span>
      </a>
    </li>
  </nav>

</template>

<script>
export default {
  data() {
    return {
      NavItems: [
        {
          id: 0,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        },
        {
          id: 1,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        },
        {
          id: 2,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        },
        {
          id: 3,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        },
        {
          id: 4,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        },
        {
          id: 5,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        },
        {
          id: 6,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        },
        {
          id: 7,
          cn: "品牌墙",
          en: "BRANDS WALL",
          path: "/pinpai"
        }
      ],
      now: 0
    };
  },
  methods: {
    changeNavItem(index) {
      this.now = index;
      // var url = "";
      if (index == 0) {
        this.$router.push({
          path: "/categroy"
        });
        return;
      }
      if (index == 1) {
        this.$router.push({
          path: "/categroy/xiaobaike"
        });
        return;
      }
      if (index == 2) {
        this.$router.push({
          path: "/categroy/weishengsu"
        });
        return;
      }
      if (index == 3) {
        this.$router.push({
          path: "/categroy/lianshencai"
        });
        return;
      }
      if (index == 4) {
        this.$router.push({
          path: "/categroy/yangshengji"
        });
        return;
      }
      if (index == 5) {
        this.$router.push({
          path: "/categroy/dayaofang"
        });
        return;
      }
      if (index == 6) {
        this.$router.push({
          path: "/categroy/meiyanshu"
        });
        return;
      }
      if (index == 7) {
        this.$router.push({
          path: "/categroy/yuerjing"
        });
        return;
      }
    }
  },
  created() {}
};
</script>

<style scoped lang="scss">
.categroy_nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 2.04rem;
  height: 100%;
  border-right: 0.026667rem solid #dedede;
  background: #fff;
  .nav_item {
    width: 100%;
    height: 1.813333rem;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-align: center;
      color: #000;
      .cn {
        // margin-bottom: .24rem;
        font-size: 0.4rem;
        // color: #000;
      }
      .en {
        font-size: 0.133333rem;
        // color: #000;
      }
    }
    a:hover {
      text-decoration: none;
    }
  }
  .active {
    background: #ff0066;
    a {
      color: #fff;
    }
    // color: #fff;
  }
  margin-top: 0.266667rem;
}
</style>
