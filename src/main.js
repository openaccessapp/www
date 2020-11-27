import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  BootstrapVue
} from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
Vue.use(BootstrapVue)
Vue.use(VueCarousel)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')