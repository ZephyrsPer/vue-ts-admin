import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from "./router"
// 引入路由守卫
import "./router/guard"
// 引入pinia
import pinia from "./store"

// 引入mockjs
import "@/mock/index"


// 各类样式引入
import './styles/main.scss'
import "./assets/iconfont/iconfont.scss"
import 'element-plus/theme-chalk/src/index.scss'


const app = createApp(App)

// 使用pinia
app.use(pinia);
// 使用router
app.use(router)
app.mount('#app')
