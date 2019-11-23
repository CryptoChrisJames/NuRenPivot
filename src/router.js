import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import FilmsInDevelopment from './pages/FilmsInDevelopment.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
    },{
        path: '/filmsindevelopment',
        name: 'filmsindevelopment',
        component: FilmsInDevelopment,
    },
],
});