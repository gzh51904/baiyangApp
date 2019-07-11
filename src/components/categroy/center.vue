<template>
  <div class="categroy_nav">
    <el-container>
      <el-aside width="100px">
        <el-menu :default-active="active" @select="handleSelect" router>
          <el-menu-item :index="item.path" v-for="item in left" :key="item.name" @click="goto(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <!-- <el-header>首页 > 发现 > 电脑</el-header> -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>

  </div>

</template>

<script>
import Vue from "vue";
import { Navbar, TabItem } from "mint-ui";
import { Container, Aside, Menu, MenuItem, Header, Main } from "element-ui";

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Main);
Vue.use(MenuItem);

export default {
  data() {
    return {
      left: [
        {
          title: "品牌墙",
          name: "pinpai",
          path: "/pinpai"
        },
        {
          title: "小百科",
          name: "baike",
          path: "/baike"
        },
        {
          title: "维生素",
          name: "weishengsu",
          path: "/weishengsu"
        },
        {
          title: "练身材",
          name: "shencai",
          path: "/shencai"
        },
        {
          title: "养生记",
          name: "yangsheng",
          path: "/yangsheng"
        },
        {
          title: "大药房",
          name: "dayaofang",
          path: "/dayaocfang"
        },
        {
          title: "美颜术",
          name: "meiyanshu",
          path: "/meiyanshu"
        },
        {
          title: "育儿经",
          name: "yuerjing",
          path: "/yuerjing"
        }
      ],
      active: "/categroy/pinpai"
    };
  },
  methods: {
    handleSelect(index, indexPaht) {
      // console.log(index, indexPaht);
      this.active = index;
    },
    goto(item) {
      // console.log(item.name)
      this.$router.push({ name: item.name });
    }
  },
  created() {
    //      console.log('$route:',this.$route);
    // let baseUrl = this.$route.path;
    // this.left = this.left.map(item=>{
    //   return {
    //     ...item,
    //     path:baseUrl+ '/' + item.name.toLowerCase()
    //   }
    // })
    // if (this.$route.params.category) {
    //   this.left = this.$route.params.category;
    // }

    // 刷新保持高亮效果
    console.log("$route:", this.$route.name);

    this.active = "/" + this.$route.name;
    console.log("this.active:", this.active);
  }
};
</script>

<style scoped lang="scss">
.categroy_nav {
  position: fixed;
  top: 1.146667rem;
  left: 0;
  bottom: 1.2rem;
  left: 0;
  top: 1.146667rem;
  bottom: 1.2rem;
  width: 2.04rem;
  
}
.active {
  font-weight: bold;
  color: #f00;
}
.el-menu-item {
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.brands-recommend li {
  font-size: 0.55rem;
  line-height: 1.48rem;
  // vertical-align: top;
  display: block;
  /* width: 28%; */
  padding: 1.5%;
  margin-left: 2%;
  border-radius: 0;
  padding-right: 0.68rem;
}
</style>
