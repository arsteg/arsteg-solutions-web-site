/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
   extend: {
    colors: {
      primary: '#1E40AF', // Example: Replace with your brand color
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Replace with your font
    },
  },
  },
  plugins: [],
}