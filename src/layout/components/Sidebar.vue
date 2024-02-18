<template>
    <div class="sidebar">
        <div class="logo" v-if="true">
            <img src="@/assets/vue.svg" alt="logo">
            <div class="logo-text" :class="!props.isSideBarCollapsed ? 'logo-collapse' : ''">后台管理</div>
        </div>
        <el-scrollbar vertical wrap-class="scrollbar-wrapper">
            <el-menu class="el-menu" :background-color="menuBg" :text-color="text_color"
                :active-text-color="menuTextActiveColor" :router="true" :collapse="!props.isSideBarCollapsed">
                <Sidebaritem :list="routes" :isFirst="true" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import Sidebaritem from "./SidebarItem.vue"
import { ref } from "vue"; // 引入 ref 函数
const menuBg = ref("#304156")
const text_color = ref("#bfcbd9")
const menuTextActiveColor = ref("#409EFF")


const props = defineProps<{
    isSideBarCollapsed: boolean // 侧边栏是否折叠
}>()

// import { RouteRecordRaw } from 'vue-router';
// 定义路由列表
const routes = [
    {
        path: "/",
        component: () => import("@/layout/index.vue"),
        meta: { title: "控制面板", icon: "icon-zhuye" },
    },
    {
        path: "/",
        component: () => import("@/layout/index.vue"),
        meta: { title: "其他内容", icon: "icon-icothers" },
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
        ],
    },
    {
        path: "/bar",
        component: () => import("@/layout/index.vue"),
        meta: { title: "柱状图", icon: "icon-biaoge" },
    },
    {
        path: "/line",
        component: () => import("@/layout/index.vue"),
        meta: { title: "折线图", icon: "icon-biaoge" },
    }
];
</script>
  
<style lang="scss" scoped>
.sidebar {
    width: 200px;
    background-color: #304156;
    color: #fff;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;

        img {
            height: 25px;
            padding: 5px;
            background-color: #fff;
            border-radius: 5px;
        }

        &-text {
            color: #0f69cfa6;
            font-size: 15px;
            min-width: 100px;
            margin-left: 20px;
            overflow: hidden;
        }

        &-collapse {
            display: none;
        }
    }

    .el-menu {
        background-color: #304156;
        color: #bfcbd9;
        border: none;
    }


}

.scrollbar-wrapper {
    height: calc(100vh - 70px);
    overflow-y: hidden;
}
</style>

