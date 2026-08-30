/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nail-maroon': '#8B3A3A',
        'nail-pink': '#E8B4C8',
        'nail-cream': '#F5F1E8',
        'nail-blue': '#7FAFB8',
        'nail-light-pink': '#F5D5E0',
        'nail-dark-red': '#A52A2A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Georgia"', 'serif'],
        elegant: ['"Cormorant Garamond"', '"Georgia"', 'serif'],
      },
      backgroundImage: {
        'nail-stripes': 'linear-gradient(90deg, #8B3A3A 20%, #E8B4C8 20%, #E8B4C8 40%, #7FAFB8 40%, #7FAFB8 60%, #F5D5E0 60%, #F5D5E0 80%, #8B3A3A 80%)',
      },
    },
  },
  plugins: [],
};
