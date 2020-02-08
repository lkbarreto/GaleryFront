import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);

Vue.use(VueAxios, axios);

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'https://apigalery.herokuapp.com/api';

Vue.config.productionTip = false

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',

    attempt: 1
})

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')