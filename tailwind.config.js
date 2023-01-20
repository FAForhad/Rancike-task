/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      }
    },
  },
  plugins: [require("daisyui")],
}
