import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, 'src/components'),
      "@images": resolve(__dirname, 'src/assets/images'),
    }
  }
})
