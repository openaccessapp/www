import Vue from 'vue'
import VueRouter from 'vue-router'
import TermsAndConditions from '../components/TermsAndConditions.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    component: TermsAndConditions
  },
  {
    path: '/privacy',
    component: PrivacyPolicy
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
