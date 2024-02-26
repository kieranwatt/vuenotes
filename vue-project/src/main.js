import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'

import App from './App.vue'
import Home from './Home.vue';
import Cart from './Cart.vue';
// import router from './router'

const routes = [
    { path: '/', component: Home }, 
    { path: '/cart', component: Cart } 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
