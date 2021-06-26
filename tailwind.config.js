module.exports = {
  purge: ['./styles/style.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem'
      },
      fontFamily: {
        'Roboto' : ['Roboto','Arial', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
