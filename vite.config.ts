import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// @ts-ignore
import path from 'path'

import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [{
                libraryName: 'element-plus',
                esModule: true,
                ensureStyleFile: true,
                resolveStyle: (name) => {
                    name = name.slice(3)
                    return `element-plus/packages/theme-chalk/src/${name}.scss`;
                },
                resolveComponent: (name) => {
                    return `element-plus/lib/${name}`;
                },
            }]
        })
    ],
    // 打包路径
    base: './',
    // 别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src') // 设置别名
        }
    },
    // 全局css
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       // 全局的scss ，跨域放多个，例如：主题的变量，和一些混合等
    //       additionalData: `@import "@/styles/base.scss";`,
    //     }
    //   }
    // },
    // 代理服务
    // server: {
    //   port: 3000, // 启动端口
    //   // open: true,
    //   proxy: {
    //     '/api': { // 匹配到啥来进行方向代理
    //       target: 'https://xx.xx', // 代理的目标
    //       changeOrigin: true, // 支持跨域
    //       rewrite: (path) => path.replace(/^\/api/, '') // 如果不需要api 直接把路径上的api 替换成空
    //     }
    //   }
    // }
})
