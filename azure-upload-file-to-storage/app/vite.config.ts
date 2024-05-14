import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve('app', 'index.html'),
        nested: resolve('app', 'nested/add.html'),
      },
      output: {
        manualChunks: {
          //@azure/storage-blob: ['@azure/storage-blob']
        }
      }
    }
  }
})
