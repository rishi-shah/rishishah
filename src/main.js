import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuesax from 'vuesax'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css'

Vue.use(BootstrapVue)
Vue.use(Vuesax)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
