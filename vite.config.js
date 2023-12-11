import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dsv from '@rollup/plugin-dsv'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dsv()],
    build: {
      target: 'esnext' //browsers can handle the latest ES features
    }
})
