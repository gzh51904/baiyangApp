<template>
  <nav class="categroy_nav">
    <li class="nav_item" v-for="(item,index) in NavItems" :key="item.id" :class="now===index?'active':''" @click="changeNavItem(index,item.path)">
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
          path: "/"
        },
        {
          id: 1,
          cn: "小儿科",
          en: "Encyclopedia",
          path: "/xiaobaike"
        },
        {
          id: 2,
          cn: "维生素",
          en: "Vitamins",
          path: "/weishengsu"
        },
        {
          id: 3,
          cn: "练身材",
          en: "BODYBUILDING",
          path: "/lianshencai"
        },
        {
          id: 4,
          cn: "养生计",
          en: "HEALTHCARE",
          path: "/yangshengji"
        },
        {
          id: 5,
          cn: "大药房",
          en: "PHARMACY",
          path: "/dayaofang"
        },
        {
          id: 6,
          cn: "美颜术",
          en: "SKINCARE",
          path: "/meiyanshu"
        },
        {
          id: 7,
          cn: "育儿经",
          en: "CHILDCARE",
          path: "/yuerjing"
        }
      ],
      now: 0
    };
  },
  methods: {
    changeNavItem(index, url) {
      this.now = index;
      const baseUrl = "/categroy";
      this.$router.push({
        path: baseUrl + url
      });
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
