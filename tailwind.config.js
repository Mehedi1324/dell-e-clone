/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 0px 6px 4px #000000d9',
        btn: '1px 1px 2px 1px #000000d9',
        cardhover: '0px 0px 5px 3px #949292',
      },
    },
  },
  plugins: [],
};
