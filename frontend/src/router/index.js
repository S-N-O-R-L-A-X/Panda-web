import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classes from '../views/Classes.vue'
import Download from '../views/Download.vue'
import Join from '../views/Join.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default router
