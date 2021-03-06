import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import {states} from "./meiosis";
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube);
Vue.config.productionTip = false;

const vueApp = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

// eslint-disable-next-line
states.map(state => {
    vueApp.$forceUpdate()
});