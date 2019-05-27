import Vue from 'vue'
import App from './App.vue'

import { currency } from './utils/filters'
import router from './router'
import store from './store'

// filters
Vue.filter('currency', currency);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
