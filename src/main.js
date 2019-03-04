import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'


import './registerServiceWorker'
import './assets/css/common.css'
import './assets/font/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
