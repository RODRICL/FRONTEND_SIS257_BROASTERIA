import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    // Aquí estamos separando ciertos paquetes grandes en chunks independientes
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'], // Paquetes comunes de Vue
          vendor: ['axios', 'primevue', 'lodash'], // Otros paquetes grandes
        },
      },
    },
    // Puedes aumentar el límite de tamaño del chunk si es necesario
    chunkSizeWarningLimit: 1000, // Aumenta el límite a 1000 KB (1 MB)
  },
})
