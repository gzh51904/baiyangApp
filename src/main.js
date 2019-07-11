import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import axios from 'axios';
import Mint from 'mint-ui'

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
