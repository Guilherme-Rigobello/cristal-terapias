/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        customRGB: '#008881',
        smCustomRGB: '#2dd4bf',
      },
    },
  },
  plugins: [],
};
