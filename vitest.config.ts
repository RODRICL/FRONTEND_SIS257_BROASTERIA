import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
    build: {
      rollupOptions: {
        // Externaliza @primevue/themes si es necesario
        external: ['@primevue/themes'],
      },
    },
    resolve: {
      alias: {
        // Asegúrate de resolver correctamente las rutas
        '@primevue/themes': fileURLToPath(new URL('./node_modules/@primevue/themes', import.meta.url)),
      },
    },
  })
);
