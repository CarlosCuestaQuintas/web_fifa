//import './assets/main.css' quitamos este import

import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'

import '@splidejs/vue-splide/css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(VueSplide).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

document.addEventListener('DOMContentLoaded', function() {
    new Splide('#carousel-erebus').mount();
})