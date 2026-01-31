import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://vitobot87.github.io',
  base: '/mavcor-astro/',
  integrations: [tailwind()],
});
