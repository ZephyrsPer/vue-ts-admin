// src/store/auth.ts

import { defineStore } from 'pinia';

// 定义认证状态的接口
export interface AuthState {
    token: string | null;
}

// 使用 defineStore 定义 AuthStore
export const useAuthStore = defineStore({
    // 指定 store 的标识符
    id: 'auth',

    // 定义初始状态
    state: (): AuthState => ({
        token: localStorage.getItem('token') || null,
    }),

    // 定义 store 的操作（actions）
    actions: {
        // 设置 token，并将其保存到 Local Storage
        setToken(token: string): void {
            this.token = token;
            localStorage.setItem('token', token);
        },

        // 获取 token
        getToken(): string | null {
            return this.token;
        },

        // 清除 token，并从 Local Storage 中移除
        clearToken(): void {
            this.token = null;
            localStorage.removeItem('token');
        },
    },
});

// 导出 useAuthStore 类型，以便在其他地方使用
export type AuthStore = ReturnType<typeof useAuthStore>;
