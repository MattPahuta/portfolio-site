
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  fonts: [{
    provider: fontProviders.fontsource(),
    name: 'Ubuntu Sans',
    cssVariable: "--font-ubuntu",
  }, {
    provider: fontProviders.fontsource(),
    name: 'Plus Jakarta Sans',
    cssVariable: "--font-sans",
  }],
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});