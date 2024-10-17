//import './assets/main.css' quitamos este import

import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'

import '@splidejs/vue-splide/css';

createApp(App).use(VueSplide).mount('#app')

document.addEventListener('DOMContentLoaded', function() {
    new Splide('#carousel-erebus').mount();
})