module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(3, 20, 47)',
        secondary: 'rgb(0, 32, 45)',
      },
    },
    fontWeight: {
      'extra-light': 200,
      normal: 400,
      bold: 700,
      black: 900,
    },
  },
  plugins: [],
}
