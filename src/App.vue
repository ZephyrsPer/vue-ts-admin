   
<template>
    <router-view></router-view>
</template>


<script setup lang="ts">
import axiosInstance from "@/utils/request"
// 在某个函数或者组件中使用封装好的 Axios 实例进行网络请求
const fetchData = async () => {
    try {
        // 发送 GET 请求示例
        const response = await axiosInstance.get('/api/users');

        // 处理成功响应
        console.log('成功获取数据:', response.data);
    } catch (error) {
        // 处理请求错误
        console.error('获取数据失败:', error);
    }
};
// Object.prototype.f = fetchData;
// 调用 fetchData 函数来发起网络请求
fetchData();
</script>


<style scoped>
#app {
    max-height: 100vh;
}
</style>
