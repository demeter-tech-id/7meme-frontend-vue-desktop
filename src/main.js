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

import router from '@/router';
import store from '@/store';
import { appInfo } from '@/constants';

new Vue({
  router,
  store,
  render: h => h(App),
  provide() {
    return {
      appInfo
    };
  }
}).$mount('#app');
