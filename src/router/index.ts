import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/Dashboard/Index.vue'),
    },
    {
        path: '/blog',
        component: Layout,
        redirect: '/blog',
        children: [
            {
                path: '/blog',
                component: () => import('@/views/Blog/Index.vue'),
                name: 'blog',
                meta: {
                    title: 'blog',
                    icon: '#icondashboard',
                    affix: true
                }
            }
        ]
    },
    // {
    //     path: '/blog',
    //     component: () => import('@/views/Blog/Index.vue'),
    // },
    // {
    //     path: '/404',
    //     component: () => import('@/views/ErrorPage/404.vue'),
    //     meta: { hidden: true }
    // },
    // {
    //     path: '/401',
    //     component: () => import('@/views/ErrorPage/401.vue'),
    //     meta: { hidden: true }
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
