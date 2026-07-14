/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kurdish: ['"Noto Kufi Arabic"', '"Inter"', 'sans-serif'],
      },
      colors: {
        bg: '#08080f',
        surface: '#0f0f1a',
        card: '#161622',
        card2: '#1d1d2c',
        accent: '#00c896',
      },
    },
  },
  plugins: [],
};
