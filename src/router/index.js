import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import PageNotFound from '@/views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
});
