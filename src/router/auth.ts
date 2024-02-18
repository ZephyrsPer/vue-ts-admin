
const dynamicRoutes = [
    {
        path: "/",
        component: () => import("@/layout/index.vue"),
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: { title: "dashboard", requiredAuth: true },
            },
            {
                path: 'test',
                component: () => import('@/views/test/test.vue'),
                meta: { title: "测试", requiredAuth: true },
            },
            {
                path: 'menu/1',
                component: () => import('@/views/test/test.vue'),

                meta: { title: "子菜单", requiredAuth: true },
            },
            {
                path: 'bar',
                component: () => import('@/views/charts/bar/index.vue'),

                meta: { title: "柱状图", requiredAuth: true },
            },
            {
                path: 'line',
                component: () => import('@/views/charts/line/index.vue'),

                meta: { title: "折线图", requiredAuth: true },
            },
        ]
    },
    // 其他动态路由...
];

export default dynamicRoutes; // 使用 default 导出整个 dynamicRoutes 数组
