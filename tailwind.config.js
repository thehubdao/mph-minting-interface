/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'paint': "url('/images/bg-mph.png')",
      },
      fontFamily: {
        'work': ['var(--work-font)', 'sans-serif'],
        'humane': ['var(--humane-font)', 'sans-serif'],
        'poppins': ['var(--poppins-font)', 'sans-serif'],
        'inter': ['var(--inter-font)', 'sans-serif']
      },
      colors:{
        'rg-white': 'rgba(255, 255, 255, 0.7)',
        'rg-black': 'rgba(13, 12, 16, 1)',
        'rg-black2': 'rgba(20, 19, 23, 1)',
        'gray1': 'rgba(84, 87, 92, 1)'
      }
    },
  },
  plugins: [],
}
