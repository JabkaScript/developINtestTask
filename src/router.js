import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import employeePage from '@/pages/employeePage.vue'


const router = createRouter({
    history : createWebHistory(),
    routes:[
        {path:'/', component:Index, alias:'/'},
        {path:'/employee/:id', component:employeePage, alias:'/employee/:id'},
    ]
})
export default router;