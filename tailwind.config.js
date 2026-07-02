/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Golden Yellow
        secondary: '#0A0A0A', // Dark Background
        gold: '#FFD700', // Golden Yellow
        background: '#000000', // Black
        text: '#F3F4F6', // Light gray
        muted: '#9CA3AF', // Gray 400
        success: '#FFD700', // Golden Yellow
        purple: '#B8860B', // Dark goldenrod for gradients
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #000000, #111111)',
      }
    },
  },
  plugins: [],
}
