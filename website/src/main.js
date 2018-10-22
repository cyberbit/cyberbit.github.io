import Vue from 'vue'
import App from './App'
import Scrollspy from 'vue2-scrollspy'

Vue.config.productionTip = false

// Configure plugins
Vue.use(Scrollspy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
