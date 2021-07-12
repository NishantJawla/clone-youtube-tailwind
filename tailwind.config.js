module.exports = {
  purge: ['./styles/style.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',
        '68': '16rem',
        '94': '24rem'
      },
      fontFamily: {
        'Roboto' : ['Roboto','Arial', 'sans-serif'],
      },
      fontSize: {
        'xxs': '.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
