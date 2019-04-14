import Vue from 'vue'
import Vuex from 'vuex'
import { store } from './store/store'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
