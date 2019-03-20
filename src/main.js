import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import service from './utils/request'
import Cookie from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/base.scss'
import './permission'

Vue.prototype.$ajax = service
Vue.prototype.$cookie = Cookie
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach
// if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//   store.dispatch('GetInfo').then(res => { // 拉取user_info
//     const roles = res.data.role;
//     next();//resolve 钩子
//   })
// }
