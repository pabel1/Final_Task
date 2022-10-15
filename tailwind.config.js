/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm': '470px',
      

      'md': '768px',
   

      'lg': '1024px',

    },
    extend: {
      colors:{
        active:"#5A45AA",
        headingText:'#171B1E',
        primaryText:'#717579',
        bgColor:'#FBFBFB',
        borderColor:'#231C3A',
        secondaryText:'rgba(255, 255, 255, 0.7)',
      },
      fontFamily:{
        fontFamily: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
