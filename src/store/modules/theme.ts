import { defineStore } from "pinia";

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => (
        {
            sideBarCollapse: true
        }
    ),
    getters: {
        // 示例getter，可以根据需要添加更多
        isSideBarCollapsed: state => state.sideBarCollapse,
    },
    actions: {
        // 示例action，可以根据需要添加更多
        toggleSideBarCollapse() {
            this.sideBarCollapse = !this.sideBarCollapse;
        },
    },
})