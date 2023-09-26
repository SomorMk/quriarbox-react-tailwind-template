/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      fontFamily: {
        'ral': ['Raleway', 'sans-serif'],
        'oxa': ['Oxanium', 'cursive']
      },
      colors: {
        'w': '#fff',
        'b': '#000',
        'p1': '#F95C19',
        'bg': '#FFF7E7',
      },
      backgroundImage: {
        'delivery-bg': "url('./src/assets/Images/delivery-bg.jpg')",
        'quote_icon': "url('./src/assets/Images/quote-icon.png')",
      },
    },
  },
  plugins: [],
}