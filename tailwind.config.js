/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      screens: {
        xsm: '425px',
      },
      colors: {
        pri: '#953E46',
        sec: '#F4E3CF',
        tri: '#943D45',
      }
    }
  },
  plugins: [],
}
