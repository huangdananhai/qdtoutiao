import Vue from 'vue'
import VueRouter, { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    // 主页
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    // 登录页
    path: '/login',
    component: Login
  }
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
