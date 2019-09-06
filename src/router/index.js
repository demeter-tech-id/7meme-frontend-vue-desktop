import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import PageNotFound from '@/views/PageNotFound.vue';

import globals from '@/globals';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '*',
            component: PageNotFound
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.path == '/login' || to.path == 'create-account') {
        if (globals.hasSession()) {
            next({ path: '/' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;