// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'  // 정확한 이름 맞음!

export default defineConfig({
  plugins: [react(), svgr()],
})

