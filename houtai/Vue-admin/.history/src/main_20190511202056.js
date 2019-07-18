import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

// import axios from "axios";
// Vue.prototype.$axios = axios;

// import bootstrap lib to the project,没有路径就会直接去找node_modules
import "bootstrap";
Vue.prototype.$axios = axios;
import 'lib-flexible';
Vue.config.productionTip = false
import './assets/iconfont/iconfont.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
                                               