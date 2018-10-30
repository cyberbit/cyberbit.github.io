import Vue from 'vue'
import Scrollspy from 'vue2-scrollspy'
import VueRouter from 'vue-router'

import App from './App'
import Foo from './views/Foo'
import Bar from './views/Bar'

Vue.config.productionTip = false

// Configure plugins
Vue.use(VueRouter)
Vue.use(Scrollspy)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
