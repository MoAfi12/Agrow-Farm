/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Blinker: ['Blinker', 'sans-serif'],
      },
      backgroundImage:{
        'hero': "url('../assets/images/team1.jpg')"
      }
    },
  },
  plugins: [],
}