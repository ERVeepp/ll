import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

//所有权限通用路由表 
//如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {
    path: '/404',
    component: () => import('./views/404.vue'),
  },
  {
    path: '/login',
    component: () => import('./views/login.vue'),
  },
  {
    path: '/index',
    component: () => import('./views/index.vue'),
  },
]

// 实例化vue的时候只挂载constantRouter
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
router.addRoutes(asyncRouterMap)

export default router

//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/',
    name: 'app',
    components: {
      nav: () => import('./views/nav.vue'),
      sidebar: () => import('./views/sidebar.vue'),
      default: () => import('./views/main.vue')
    },
    children: [
      {
        path: 'offer',
        name: 'offer',
        meta: {
          // 页面需要的权限
          role: ['super_admin', 'admin']
        },
        component: () => import('./views/offer.vue'),
        children: [
          {
            path: 'create',
            name: 'create',
            component: () => import('./views/post.vue')
          },
          {
            path: 'edit/:id(\\d+)',
            name: 'edit',
            component: () => import('./views/post.vue')
          }
        ]
      }
    ]
  },
  {
    path: '*',
    // 302
    redirect: '/404'
  }
]
