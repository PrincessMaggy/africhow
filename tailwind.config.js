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
        words: "#000F08",
        'light-green': '#E7FFF8',
        'light-red': '#FAFAFA',
        'bg-order-header': "#F3FFF4",
        'bg-order-nav': "#F2F2F2",
        'bg-order-notify': "#FF8A83",
        'bg-order-active': "#145062",
      },
      fontFamily: {
        body: ['Manrope']
      },
    },
  },
  plugins: [],
}

