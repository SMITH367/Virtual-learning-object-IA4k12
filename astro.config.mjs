import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  alias: {
    '@': path.resolve('./src'), // Esto define el alias @ como la carpeta src
  },
});