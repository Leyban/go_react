import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
      rollupOptions: {
          input: {
              home: resolve(__dirname, 'pages/index.html'),
              main: resolve(__dirname, 'pages/main/index.html'),
              test: resolve(__dirname, 'pages/test/index.html')
          }
      }
  }

})
