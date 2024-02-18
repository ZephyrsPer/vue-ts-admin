<template>
    <div class="navbar">
        <div class="left">
            <Hamberger :isSideBarCollapsed="props.isSideBarCollapsed" @emit-menu-alter="handleMenuAlter" />
            <Breadcrumb />
        </div>
        <div class="right">
            <Screenfull />
            <HeaderAvatar />
        </div>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamberger from "@/components/Hamburger/index.vue"
import HeaderAvatar from "@/components/HeaderAvatar/index.vue"
import Screenfull from "@/components/Screenfull/index.vue"

import { useThemeStore } from "@/store/modules/theme"
const themeStore = useThemeStore()
const props = defineProps<{
    isSideBarCollapsed: boolean
}>()

const handleMenuAlter = () => {
    themeStore.toggleSideBarCollapse()
}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #fff;

    .left {
        display: flex;
        align-items: center;
        height: 100%;
    }

    .right {
        display: flex;
        align-items: center;
        height: 100%;
    }
}
</style>