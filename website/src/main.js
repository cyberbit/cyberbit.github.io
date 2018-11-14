import Vue from 'vue'
import Scrollspy from 'vue2-scrollspy'

import App from './views/App'
import router from './router'

Vue.config.productionTip = false

// Configure plugins
Vue.use(Scrollspy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
