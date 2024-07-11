import { default as animate } from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ['Fredericka the Great'],
      },
    },
  },
  plugins: [animate],
};
