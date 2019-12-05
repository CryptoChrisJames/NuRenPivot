import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Stream from './pages/Stream.vue';
import About from './pages/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
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
        path: '/about',
        name: 'about',
        component: About,
    },
],
});