module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    fontFamily: { sans: ['Inter', 'sans-serif'] },
    extend: {
      colors: {
        grape: {
          100: '#e4c6fa',
          300: '#cd9ef7',
          500: '#a56de2',
          700: '#7239b3',
          900: '#452981',
        },
      },
      fontFamily: { cursive: ['Lobster', 'cursive'] },
      width: { '1/2': '50%' },
    },
  },
  variants: { extend: { brightness: ['hover'] } },
  plugins: [],
}
