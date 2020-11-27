import Vue from 'vue'
import VueRouter from 'vue-router'
import TermsAndConditions from '../components/TermsAndConditions.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import Home from '../components/Home.vue'
import Documentation from '../components/Documentation.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/:lang',
    name: 'Home',
    component: Home
  },
  {
    path: '/:lang/terms',
    component: TermsAndConditions
  },
  {
    path: '/:lang/privacy',
    component: PrivacyPolicy
  }, {
    path: '/:lang/documentation',
    component: Documentation
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router