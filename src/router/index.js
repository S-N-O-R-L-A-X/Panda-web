import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classes from '../views/Classes.vue'
import Download from '../views/Download.vue'
import Join from '../views/Join.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
// import Test from '../mobile/test.vue'
import M_signup from '../mobile/mobile_SignUp.vue'
import M_signin from '../mobile/mobile_SignIn.vue'
import M_home from '../mobile/mobile_Home.vue'
import M_join from '../mobile/mobile_Join.vue'
import M_download from '../mobile/mobile_Download.vue'
import M_classes from '../mobile/mobile_Classes.vue'

Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

window.addEventListener('hashchange',function(e) {
  console.log(e.oldURL); 
  console.log(e.newURL)
},false);

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
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: Test
  // },
  {
    path: '/m_signup',
    name: 'M_signup',
    component: M_signup
  },
  {
    path: '/m_signin',
    name: 'M_signin',
    component: M_signin
  },
  {
    path: '/m_home',
    name: 'M_home',
    component: M_home
  },
  {
    path: '/m_join',
    name: 'M_join',
    component: M_join
  },
  {
    path: '/m_download',
    name: 'M_download',
    component: M_download
  },
  {
    path: '/m_classes',
    name: 'M_classes',
    component: M_classes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
