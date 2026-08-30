/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nail-pink': '#FFB6C1',
        'nail-purple': '#DDA0DD',
        'nail-gold': '#FFD700',
      },
    },
  },
  plugins: [],
};