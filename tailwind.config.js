/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SeoulNamsan"', '"Seoul Namsan"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0b0d10',
          900: '#111317',
          850: '#16191f',
          800: '#1b1f26',
          700: '#252a34',
        },
        limeAccent: {
          DEFAULT: '#a3e635',
          light: '#bef264',
          dark: '#65a30d',
          glow: 'rgba(163, 230, 53, 0.15)',
        },
      },
    },
  },
  plugins: [],
}
