import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/dashboard')
      }
    ]
  },
  {
    path: '/financial-data',
    component: Layout,
    redirect: '/financial-data/zh',
    children: [
      {
        name: 'zh',
        path: 'zh',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/financialData')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
