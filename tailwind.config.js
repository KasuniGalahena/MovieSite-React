/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem',
      },
    },
    extend: {
      colors: {
        primary: '#fab005',
        secondary: '#CAFA05',
        dark: '#141416',
        dark2: '#171717',
        white: '#f4f6fc'
      },
      fontFamily: {
        NotoSans: ['Noto Sans', 'sans-serif'],
        Helvetica: ['Helvetica Neue', 'sans-serif'],
        Ceraroundpro: ['Ceraroundpro']
      },
      contrast: {
        25: '.25',
      },
      backgroundImage: {
        'background': "url('../assets/images/background.jpeg')",
      }
    },
  },
  plugins: [],
}

