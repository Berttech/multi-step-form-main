/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'denim': '#022959',
        'gray': '#9699AA',
        'light-blue': '#ABBCFF',
        'light-gray': '#D6D9E6',
        'orange': '#FFAF7E',
        'pink': '#F9818E',
        'purplier': '#483EFF',
        'red': '#EE374A',
        'sky-blue': '#BEE2FD',
        'verylight-grey': '#F8F9FF',
        'bg': '#EFF5FF'
      },
      fontFamily: {
        'ubuntu': ['Ubuntu'],
      },
      margin: {
        '25': '6.25rem'
      },
      fontSize: {
        '2': '2rem'
      },
      gap: {
        '4.5': "1.125rem"
      }
    },
  },
  plugins: [],
}