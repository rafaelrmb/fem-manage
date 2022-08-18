/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1921px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        vietnamPro: 'Be Vietnam Pro'
      }
    },
  },
  plugins: [],
}
