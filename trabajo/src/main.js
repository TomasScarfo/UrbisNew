import * as Vue from 'vue';
import * as  VueRouter from 'vue-router';


import { createApp } from 'vue'
import App from './App.vue'
import app from "@/App";
import Pedir from "@/components/Pedir";
import NotFound from "@/components/NotFound";

createApp(App).mount('#app')

const routes = [
    {path: '/', name: "HomeRoute", component: app},
    {path: '/Pedidos-online', name: "PedidosRoute", component: Pedir},
    {path: '*', name: "PageNotFound", component: NotFound}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const create = Vue.createApp(App);
create.use(router);
create.mount('#app');

