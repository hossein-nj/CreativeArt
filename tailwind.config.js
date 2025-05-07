/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },
      fontFamily: {
        "canela": "Canela",
        "inter": "Inter",
        "interBold": "Inter Bold"
      },
      colors: {
        "primary": "#D3F85A",
        "secondary": "#FFFFFD",
        "third": "#131E3A",
        "btnColor": "#090F1D",
        "subtitleColor": "#838382"
      }
    },
    screens: {
      'xs': '399px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [
  function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
  }
],
}