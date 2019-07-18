import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requireAuth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/admin/admin.vue'),
      children: [
        {
          path: 'goods',
          name: 'goods',
          title: '商品管理',
          component: () => import('../pages/admin/goods/goods'),//路径要自己改
          children:[
            {
              path: 'list',
              name: 'list',
              title: '商品列表',
              component: () => import('../pages/admin/goods/list'),//路径要自己改
            },
            {
              path: 'categories',
              name: 'categories',
              title: '商品分类',
              component: () => import('../pages/admin/goods/categories'),//路径要自己改
            },
            {
              path: 'addgoods',
              name: 'addgoods',
              title: '添加商品',
              component: () => import('../pages/admin/goods/addgoods'),//路径要自己改
            },
          ]
        },
        {
          path: 'users',
          name: 'users',
          title: '用户管理',
          component: () => import('../pages/admin/users/users'),//路径要自己改
          children:[
            {
              path: 'list',
              name: 'list',
              title: '用户列表',
              component: () => import('../pages/admin/users/list'),//路径要自己改
            },
            {
              path: 'adduser',
              name: 'adduser',
              title: '添加用户',
              component: () => import('../pages/admin/users/adduser'),//路径要自己改
            },
           
          ]
        },
        {
          path: 'order',
          name: 'order',
          title: '订单管理',
          component: () => import('../pages/admin/order'),//路径要自己改
        }
      ]
    }
  ]
})
