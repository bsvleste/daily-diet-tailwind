/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#ffff',
        'gray': {
          200: '#FAFAFA',
          300: '#EFF0F0',
          400: '#DDDEDF',
          500: '#B9BBBC',
          600: '#5C6265',
          700: '#333638',
          800: '#1B1D1E',
        },
        'green': {
          500: '#639339',
          300: '#CBE4B4',
          100: '#E5F0DB',
        },
        'red': {
          500: '#BF3B44',
          300: '#F3BABD',
          100: '#F4E6E7',
        },
      
      },
      fontFamily: {
        heading: 'NunitoSans_700Bold',
        body: 'NunitoSans_400Regular,',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text)-(red)-(500|300|100)/,
    },
  ],
}
