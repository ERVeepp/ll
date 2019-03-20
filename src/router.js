import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
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
    }
  ]
})
