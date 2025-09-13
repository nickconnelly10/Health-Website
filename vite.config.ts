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
    sourcemap: false,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      external: ['node-fetch', 'node:http', 'node:https', 'node:zlib'],
      input: {
        main: 'index.html'
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['node-fetch']
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  esbuild: {
    target: 'esnext',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
}) 