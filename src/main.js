import Vue from 'vue';
import App from '@/App.vue';

import '@/registerServiceWorker';

Vue.config.productionTip = false;

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
Vue.component('fa', FontAwesomeIcon);

import VueMobileDetection from "vue-mobile-detection";
Vue.use(VueMobileDetection);

import router from '@/router';
import store from '@/store';
import globals from '@/globals';
import restful from '@/restful';

new Vue({
    router,
    store,
    render: h => h(App),
    data: {
        eventBus: new Vue()
    },
    provide() {
        return {
            globals,
            restful,
            eventBus: this.eventBus
        };
    }
}).$mount('#app');
