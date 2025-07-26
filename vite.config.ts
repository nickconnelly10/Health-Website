import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: ['node-fetch', 'node:http', 'node:https', 'node:zlib'],
      input: {
        main: 'index.html'
      }
    }
  },
  optimizeDeps: {
    exclude: ['node-fetch']
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}) 