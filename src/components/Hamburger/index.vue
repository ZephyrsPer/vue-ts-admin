<template>
    <div class="hamburger" @click="emitMenuAlter">
        <el-icon class="iconfont" :class="props.isSideBarCollapsed ? 'icon-shifang' : 'icon-zhankai'"
            :size="iconSize"></el-icon>
    </div>
</template>

<script lang="ts" setup>
const iconSize = "18px";
// 定义 props 对象，其包含一个名为 collapse 的布尔类型属性
const props = defineProps<{
    isSideBarCollapsed: boolean
}>()


const emit = defineEmits(['emitMenuAlter'])
const emitMenuAlter = () => {
    emit('emitMenuAlter')
}

    
</script>

<style lang="scss" scoped>
.hamburger {
    height: 100%;
    padding: 0px 12px;
    margin-right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgb(235, 235, 232);
    }
}
</style>