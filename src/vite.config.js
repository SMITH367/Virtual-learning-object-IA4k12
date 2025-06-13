import { defineConfig } from 'vite';
import path from 'path';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
