<template>
    <div class="login">
        <div class="login-container">
            <el-card class="login-card">
                <el-form ref="loginFormRef" :model="loginData" :rules="loginRules">
                    <el-form-item prop="account">
                        <el-input v-model="loginData.account" placeholder="请输入账号" @keyup.enter="handleLogin">
                            <template #prefix><i class="iconfont icon-user"></i></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="pwd">
                        <el-input v-model="loginData.pwd" placeholder="请输入密码" type="password" @keyup.enter="handleLogin">
                            <template #prefix><i class="iconfont icon-lock"></i></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleLogin">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="userPwd">
                <div>账号：admin 密码：123456</div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage } from "element-plus";
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/modules/permission';


const router = useRouter();
const authStore = useAuthStore();

const loginData = ref({
    account: 'admin',
    pwd: '123456',
});

const loginRules = {
    account: [
        { required: true, trigger: 'blur', message: '请输入账号' },
        { min: 5, trigger: 'blur', message: '账号至少5位数' }
    ],
    pwd: [
        { required: true, trigger: 'blur', message: '请输入密码' },
        { min: 5, trigger: 'blur', message: '密码至少6位数' }
    ],
};

const loginFormRef = ref();

const handleLogin = async () => {
    const checkData = await loginFormRef.value.validate();
    if (!checkData) {
        return false;
    }

    // 模拟登录
    if (loginData.value.account === 'admin' && loginData.value.pwd === '123456') {
        // 更新 Pinia 中的认证状态
        authStore.setToken('fake_token');

        ElMessage({
            message: '成功登录',
            type: 'success',
        });

        // 成功登录后进行页面跳转
        router.replace('/dashboard'); // 跳转到首页
    } else {
        ElMessage({
            message: '账号或密码错误',
            type: 'error',
        });
    }
};

// 在组件加载时检查本地是否存在有效的 token，如果存在则进行重定向
onMounted(() => {
    const token = authStore.getToken();
    if (token) {
        // 如果存在有效的 token，则重定向到指定页面，比如首页
        router.replace('/dashboard');
        // ElMessage({
        //     message: "已经完成登录",
        //     type: "success"
        // })
    }
});
</script>
  
<style lang="scss" scoped>
@import './index.scss';
</style>
  