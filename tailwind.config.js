/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [],
}

