/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontWeight: {
        semibold: 900,
      },
      colors: {
        primary: '#D2C0A6',
        'primary-hover':  '#D6C4A9',
        secondary: '#AB9178', 
        'secondary-hover': '#9C846C',
        grayText: '#101010',
      },
    },
  },
  plugins: [],
}

