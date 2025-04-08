/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      padding: {
        'safe': 'env(safe-area-inset-top)',
      }
    },
  },
  plugins: [],
} 