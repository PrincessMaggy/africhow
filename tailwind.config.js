/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#33CC9F",
        secondary: "#145062",
        words: "#000F08"
      },
      fontFamily: {
        body: ['Manrope']
      },
    },
  },
  plugins: [],
}

