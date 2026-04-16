/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        'text-dark': '#1f2937',
        'text-light': '#64748b',
      },
      spacing: {
        'section': '3rem',
      }
    },
  },
  plugins: [],
}
