import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import dynamicRoutes from './auth';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Index.vue')
    },
    {
        path: '/:catchAll(.*)', // 捕获所有未匹配的路由
        component: () => import('../views/NotFound.vue') // 显示404页面
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});


// 添加动态路由
dynamicRoutes.forEach(route => {
    router.addRoute(route);
});

export default router;
