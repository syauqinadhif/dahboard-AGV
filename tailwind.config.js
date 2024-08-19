import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', '"Roboto"', ...defaultTheme.fontFamily.sans],
        mont: ['Mont', ...defaultTheme.fontFamily.sans],
        productsans: ['"Product Sans"', ...defaultTheme.fontFamily.sans],
        vagrounded: ['"VAG Rounded Next"', ...defaultTheme.fontFamily.sans] // Tambahkan ini
      },
      lineHeight: {
        12: '4rem'
      },
      colors: {
        primary: '#000066',
        secondary: '#D6D6EE',
        red : '#DA0101',
        secondarygreen: '#497E8A',
        blue: '#000066'
      }
    }
  },
  plugins: []
}
