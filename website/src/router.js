import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Developer from './views/Developer'
import Musician from './views/Musician'
import Human from './views/Human'
import AudioVisualizer from './components/AudioVisualizer'
import AudioVisualizerCircle from './components/AudioVisualizerCircle'

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
    path: '/audio',
    component: AudioVisualizer
  },
  {
    path: '/audio2',
    component: AudioVisualizerCircle
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
