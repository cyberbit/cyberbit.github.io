import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Developer from './views/Developer'
import Musician from './views/Musician'
import Human from './views/Human'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/developer',
    component: Developer
  },
  {
    path: '/musician',
    component: Musician
  },
  {
    path: '/human',
    component: Human
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
