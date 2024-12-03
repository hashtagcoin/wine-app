/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#FCE8EC',
          100: '#F9D1D9',
          200: '#F3A3B4',
          300: '#ED758F',
          400: '#E7476A',
          500: '#E11945',
          600: '#B41437',
          700: '#870F29',
          800: '#5A0A1B',
          900: '#2D050E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};