import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; //商城
import Search from "./views/Search.vue"; //搜索
import Categroy from "./views/Categroy.vue"; //分类
import Find from "./views/Find.vue"; //发现
import Cart from "./views/Cart.vue"; //购物车
import Member from "./views/Member.vue"; //我的
import Login from "./views/Login.vue"; //登录
import LoginPwd from "./views/LoginPwd.vue";
import List from "./views/List.vue"; //列表
import Detail from "./views/Detail.vue"; //详情页
import Setting from "./components/member/Setting.vue"; //设置页
import Order from "./components/member/Order.vue"; //订单页
import PinPaiQiang from "./components/categroy/PinPaiQiang.vue"; //品牌墙
import XiaoBaiKe from "./components/categroy/XiaoBaiKe.vue"; //小百科
import WeiShengSu from "./components/categroy/WeiShengSu.vue"; //维生素
import LianShenCai from "./components/categroy/LianShenCai.vue"; //练身材
import YangShengJi from "./components/categroy/YangShengJi.vue"; //养生记
import DaYaoFang from "./components/categroy/DaYaoFang.vue"; //大药房
import MeiYanShu from "./components/categroy/MeiYanShu.vue"; //美颜术
import YuErJing from "./components/categroy/YuErJing.vue"; //育儿经

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/categroy",
      name: "categroy",
      component: Categroy,

      children: [
        {
          name: "pinpaiqiang",
          path: "",
          component: PinPaiQiang
        },
        {
          name: "xiaobaike",
          path: "xiaobaike",
          component: XiaoBaiKe
        },
        {
          name: "weishengsu",
          path: "weishengsu",
          component: WeiShengSu
        },
        {
          name: "lianshencai",
          path: "lianshencai",
          component: LianShenCai
        },
        {
          name: "yangshengji",
          path: "yangshengji",
          component: YangShengJi
        },
        {
          name: "dayaofang",
          path: "dayaofang",
          component: DaYaoFang
        },
        {
          name: "meiyanshu",
          path: "meiyanshu",
          component: MeiYanShu
        },
        {
          name: "yuerjing",
          path: "yuerjing",
          component: YuErJing
        }
      ]
    },
    {
      path: "/find",
      name: "find",
      component: Find
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/member",
      name: "member",
      component: Member
    },
    {
      name: "setting",
      path: "/member/setting",
      component: Setting
    },
    {
      name: "order",
      path: "/member/order",
      component: Order
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/login_pwd",
      name: "login_pwd",
      component: LoginPwd
    },
    {
      path: "/list",
      name: "list",
      component: List
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});

// Router.beforeEach((to,from,next)=>{
//   console.log('全局：beforeEach',to);
//   // 判断目标路由是否需要登录权限才可访问
//   if(to.matched.some(item=>item.meta.requiresAuth)){
//       let token = localStorage.getItem('Authorization');
//       axios.get('/verify')
//       // 用户已登录
//       if(token){
//           next();
//       }

//       // 用户未登录
//       else{
//           next({
//               path:'/login',
//               query:{
//                   redirectTo:to.fullPath
//               }
//           })
//       }
//   }else{
//       next();
//   }
// })
