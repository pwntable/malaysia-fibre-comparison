/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          unifi: '#FF6600',
          celcomdigi: '#0055A5',
          maxis: '#78C440',
          umobile: '#FF8200'
        }
      }
    },
  },
  plugins: [],
}
