import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 8999 // 项目运行的端口号
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import '@/styles/main.scss';`
  //     }
  //   }
  // },
})

