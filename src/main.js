import Vue from 'vue'
import App from './App.vue'

import router from './router';
import axios from 'axios';
import Mint from 'mint-ui'
import store from './vuex';


// 请求拦截：发送token
axios.interceptors.request.use(config=>{
  // 每次利用axios发起的请求，都会进入到这里
  // 添加token
  let token = localStorage.getItem('Authorization');
  if(config.url != '/login'){
    config.headers.Authorization = token;

  }
  return config;
}, error=>{
  // 请求失败进入这个回调
  return Promise.reject(error);
});




Vue.use(Mint) 
Vue.prototype.$axios = axios;
// import rem from './assets/js/rem';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  // rem,
  render: h => h(App)
}).$mount('#app')
