import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia';
import App from "./App.vue";

Vue.use(VueCompositionAPI);
Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
    pinia,
    render: h => h(App),
}).$mount('#app');
