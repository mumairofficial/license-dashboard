import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/licenses',
      name: 'license-manage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LicenseManage.vue')
    },
    {
      path: '/applications',
      name: 'applications',
      component: () => import('./views/Applications.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./views/Settings.vue')
    }
  ]
})
