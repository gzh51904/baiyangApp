import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'; //商城
import Search from './views/Search.vue'; //搜索
import Categroy from './views/Categroy.vue'; //分类
import Find from './views/Find.vue'; //发现
import Cart from './views/Cart.vue'; //购物车
import Member from './views/Member.vue'; //我的
import Login from './views/Login.vue'; //登录
import List from './views/List.vue'; //列表
import Detail from './views/Detail.vue'; //详情页

import pinpai from './components/categroy/pinpai.vue'; //品牌页
import baike from './components/categroy/baike.vue'; //百科页
import weishengsu from './components/categroy/weishengsu.vue'; //维生素页
import shencai from './components/categroy/shencai.vue'; //身材页


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/categroy',
      name: 'categroy',
      component: Categroy,

      children: [{
        name: 'pinpai',
        path: 'pinpai',
        component: pinpai
      }, {
        name: 'baike',
        path: 'baike',
        component: baike
      }, {
        name: 'weishengsu',
        path: 'weishengsu',
        component: weishengsu
      }, {
        name: 'shencai',
        path: 'shencai',
        component: shencai
      }]
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})