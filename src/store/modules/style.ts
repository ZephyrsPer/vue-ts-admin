import { defineStore } from 'pinia';

export const useStyleStore = defineStore({
    id: "style",
    state: () => ({
        c1: null,
        c2: '',
        c3: 0
        // 添加其他状态变量
    }),
    actions: {
        // 定义更新状态的 action 函数
        updateC1(newValue: any) {
            this.c1 = newValue;
        },
        updateC2(newValue: any) {
            this.c2 = newValue;
        },
        updateC3(newValue: any) {
            this.c3 = newValue;
        },
        // 添加其他更新状态的 action 函数
    },
});
