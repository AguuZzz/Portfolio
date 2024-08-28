// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#3f3f46',
        primary: '#006FEE',
        secondary: '#9353d3',
        success: '#17c964',
        warning: '#f5a524',
        danger: '#f31260',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};