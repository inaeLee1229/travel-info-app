import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import svgo from 'vite-plugin-svgo'

export default defineConfig({
  plugins: [react(), svgr(), svgo()],
})

