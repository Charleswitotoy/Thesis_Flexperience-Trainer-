/** @type {import('tailwindcss').Config} */

const colors = 

module.exports = {
  content: ["./src/**/*.{html,js}", "./Trainer/**/*.{html,js}", "./script/**/*.{js}", "./Landing Page/**/*.{html,js}"],
  theme: {
    
    colors: {
      primary: {
        50: '#EC7E4A',
        51: '#343639',
        52: '#FFFFFF',
        'custom-bg': '#323538',
        'custom-border': '#EC7E4A',
        customGray: '#343639',
        customOrange: '#EC7E4A',
        guestNavbar: '#232121',
        forGradientGray: '#232323',
        forGradientWhite: '#898787',
      }
    },
    extend: {
      // Add this to include custom utilities
      fontFamily:{
        customFont: ['"Aldrich"', "sans-serif"]
      },
      boxShadow: {
        'custom-shadow': '1px 2px 4px black',
        'custom-shadow': '0 5px 30px rgba(0, 0, 0, .30)'
      },
      utilities: {
        '.no-scrollbar': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
      width: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}
