import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import { store } from './store'

import App from './App.vue'
    
const routeInfos = [
    {
        path: '/list/:id',
        name: 'list',
        component: () => import('./components/UserList.vue'),
    },
    {
        path : '/user/:id',
        name: 'user',
        component: () => import('./components/UserCard.vue')    },
    { 
        path: '/:pathMatch(.*)*',
        redirect: '/list'
    },
]
    
const router = createRouter({
    history: createWebHistory(),
    routes: routeInfos
})


const app = createApp(App).use(router)

app.use(store)

app.mount('#app')


