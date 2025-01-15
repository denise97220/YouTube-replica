import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: {
          default: colors.neutral[100],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ['dark-hover']: colors.neutral[900]
        }
      }
    },
    safelist: ['grid-cols-[repeat(auto-fill,minmax(300px,1fr))]']
  },
  plugins: []
}
