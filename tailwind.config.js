/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#1e2132',
          900: '#121626',
          950: '#0a0e1a',
        },
        blue: {
          850: '#1a365d',
        },
      },
    },
  },
  plugins: [],
};