/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jost': ['"Jost"', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#cc4316',
        'dark1': '#1f2937',
        'dark2': '#5c5c5c'
      }
    },
  },
  plugins: [require("daisyui")],
}
