import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Stream from './pages/Stream.vue';
import AllOfTheLights from './pages/AllOfTheLights.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
    },{
        path: '/stream/:video',
        name: 'stream',
        component: Stream,
        params: true,
    },{
        path: '/allofthelights',
        name: 'allofthelights',
        component: AllOfTheLights,
    },
],
});