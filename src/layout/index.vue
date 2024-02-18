<template>
    <div class="layout" :class="isSideBarCollapsed ? 'openSidebar' : 'hideSidebar'">
        <Sidebar class="sidebar-container" :isSideBarCollapsed="isSideBarCollapsed" />
        <div class="main-container">
            <div class="main-container-header">
                <Navbar :isSideBarCollapsed="isSideBarCollapsed" />
            </div>
            <div class="main-container-content">
                <AppMain />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import AppMain from './components/AppMain.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

import { useThemeStore } from "@/store/modules/theme"
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const storeRefs = storeToRefs(themeStore);
// 现在你可以访问 isSideBarCollapsed，它是一个 ref 对象
const isSideBarCollapsed = storeRefs.isSideBarCollapsed;

</script>


<style lang="scss" scoped>
.layout {
    display: flex; // 设置布局为flexbox
    height: 100vh; // 让布局铺满整个视口

    .sidebar-container {
        width: 200px; // 侧边栏宽度
        background: #304156; // 侧边栏背景色
        color: #fff; // 侧边栏文字颜色
        transition: width 0.3s; // 添加过渡效果
        // overflow-y: auto; // 侧边栏内容溢出时显示滚动条
        // overflow-y: hidden; // 隐藏侧边栏内容溢出时的滚动条
    }

    .main-container {
        display: flex; // 主容器内部布局为flexbox
        flex: 1; // 主容器占据剩余空间
        flex-direction: column; // 主容器内部垂直布局

        .main-container-header {
            height: 50px;
            display: flex;
            align-items: center;
        }

        .main-container-content {
            flex: 1; // 内容区域占据剩余空间
            padding: 20px; // 内容区域内边距
            background-color: #f0f0f0; // 内容区域背景色
            overflow-y: auto; // 内容溢出时显示滚动条
            // overflow-y: hidden; // 隐藏侧边栏内容溢出时的滚动条
        }
    }

    // 定义侧边栏收起时的样式
    &.hideSidebar .sidebar-container {
        width: 64px; // 收起侧边栏
    }
}
</style>
