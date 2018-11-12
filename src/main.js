import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './registerServiceWorker'

// eslint-disable-next-line no-unused-vars
import library from './utils/FontAwesomeWrapper'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
