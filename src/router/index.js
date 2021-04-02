import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../layout'

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
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "home" */ '../views/dashboard')
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
