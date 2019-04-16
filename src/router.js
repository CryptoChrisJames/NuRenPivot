import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import About from './components/about.vue'
import Contact from './components/contact.vue'
import FilmsInDevelopment from './components/filmsindevelopment.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },{
            path: '/about',
            name: 'about',
            component: About
        },{
            path: '/contact',
            name: 'contact',
            component: Contact
        }
        ,{
            path: '/filmsindevelopment',
            name: 'filmsindevelopment',
            component: FilmsInDevelopment
        }
    ]
});