/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#0F172A',
        gold: '#D4AF37',
        background: '#F8FAFC',
        text: '#111827',
        muted: '#6B7280',
        success: '#059669',
        purple: '#7C3AED',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #0F172A, #1E40AF)',
      }
    },
  },
  plugins: [],
}
