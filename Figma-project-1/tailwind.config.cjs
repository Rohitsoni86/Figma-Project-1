/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      fullbodyColor: '#E7F2ED',
      TextPrimaryFigma: '#04282D',
      bgsecondary:'#F2F2E6'
    },
    extend: {},
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin"),require('./node_modules/flowbite/plugin')],
}
