import * as Vue from 'vue';
import * as  VueRouter from 'vue-router';


import App from "@/App";
import NotFound from "@/components/NotFound";
import Home from "@/components/Home";
import Menu from "@/components/Menu";
import Pedir from "@/components/Pedir";
import Redes from "@/components/Redes";


const routes = [
    {path: '/', name: "HomeRoute", component: Home},
    {path: '/Menu', name: "Menu", component: Menu},
    {path: '/PedidosOnline', name: "PedidosOnline", component: Pedir},
    {path: '/Redes', name: "Redes", component: Redes},


    {path: '/:pathMatch(.*)*', component: NotFound}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');