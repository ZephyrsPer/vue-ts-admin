<template>
    <template v-for="item in props.list" :key="item.path">
        <!-- 无子路由，一级 -->
        <el-menu-item v-if="verifyRouteChildren(item.children)" :index="item.path">
            <el-icon v-if="props.isFirst" class="iconfont" :class="item.meta?.icon" />
            <template #title>
                <span>{{ item.meta?.title }}</span>
            </template>
        </el-menu-item>
        <!-- 否则渲染子路由 -->
        <el-sub-menu v-else :index="item.path">
            <!-- 如果是第一级菜单，渲染图标 -->
            <template #title>
                <el-icon v-if="props.isFirst" class="iconfont" :class="item.meta?.icon" />
                <!-- 菜单标题 -->
                <span>{{ item.meta?.title }}</span>
            </template>
            <!-- 递归渲染子菜单 -->
            <SidebarItem :list="item.children" :isFirst="false" />
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
// 声明组件 props
const props = defineProps<{
    list?: Array<any>
    isFirst: boolean
}>()
/* 
 * @desc: 判断是否存在子路由
 * @param {RouteRecordRaw} children 子路由列表
 * @return {boolean} 是否存在子路由
*/
const verifyRouteChildren = (children?: RouteRecordRaw[]): boolean => {
    // 可选参数
    return !children || children.length === 0
}
</script>
  
<style lang="scss" scoped>
// 在这里添加您的 SCSS 样式
// 定义激活状态的样式
.el-menu-item.is-active {
    color: #FFF;
}
</style>
  