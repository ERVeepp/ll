import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import service from './utils/request'
import Cookie from 'js-cookie'

Vue.prototype.$ajax = service
Vue.prototype.$cookie = Cookie

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
