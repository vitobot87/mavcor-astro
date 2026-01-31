/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Mavcor brand colors - dark navy professional theme
        mavcor: {
          navy: '#0a1628',
          dark: '#0f1f3a',
          accent: '#1e40af',
          blue: '#3b82f6',
          gold: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
};
