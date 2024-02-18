<template>
  <!-- 面包屑导航组件的模板 -->
  <div class="breadcrumb">
    <!-- 使用 Element Plus 的面包屑组件 -->
    <el-breadcrumb separator="/">
      <!-- 遍历渲染面包屑项 -->
      <el-breadcrumb-item v-for="(item, key) in state.leveList" :key="key" :to="{ path: key === 1 ? '' : item.path }">
        <!-- 显示面包屑项的标题 -->
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
// 导入 Vue Router 相关方法和 Vue 的响应式函数
import { useRoute, onBeforeRouteUpdate, onBeforeRouteLeave, RouteRecordNormalized } from 'vue-router'
import { reactive } from 'vue'

// 定义面包屑项的数据结构
interface ILeveList {
  path: string
  title: unknown
}

// 使用 useRoute() 获取当前路由信息
const route = useRoute()

// 使用 reactive 创建响应式状态
const state = reactive({
  leveList: [] as ILeveList[] // 存放面包屑项列表
})

// 获取面包屑列表的函数
const getLevelList = (data: RouteRecordNormalized[]) => {
  const leveList: ILeveList[] = []
  // 遍历路由匹配的记录，生成面包屑列表
  data.forEach((item, key) => {
    if (key === 0) {
      if (item.path === '/index/dashboard') {
        return false
      } else {
        leveList.push({ path: '/index/dashboard', title: '首页' })
        if (!item.meta || !item.meta.title) {
          return false
        } else {
          leveList.push({ path: item.path, title: item.meta.title })
        }
      }
    } else {
      leveList.push({ path: item.path, title: item.meta.title })
    }
  })
  state.leveList = leveList // 更新面包屑项列表
}

// 在组件初始化时获取初始面包屑列表
getLevelList(route.matched)

// 监听路由更新前事件，在路由更新前重新获取面包屑列表
onBeforeRouteUpdate((to) => {
  getLevelList(to.matched)
})

// 监听路由离开前事件，在路由离开前重新获取面包屑列表
onBeforeRouteLeave((to) => {
  getLevelList(to.matched)
})
</script>

<style lang="scss" scoped></style>
