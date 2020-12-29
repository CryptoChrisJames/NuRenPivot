import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import App from './App.vue';
import store from './store/store.js';
import Parallax from 'vue-parallax-js';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Parallax);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
