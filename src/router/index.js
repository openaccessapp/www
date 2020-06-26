import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import TermsAndConditions from '../components/TermsAndConditions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/TermsAndConditions',
    component: TermsAndConditions
  }
]

const router = new VueRouter({
  routes
})

export default router
