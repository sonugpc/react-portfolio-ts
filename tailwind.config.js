/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f0fd",
          100: "#e3e4fc",
          200: "#ccccf9",
          300: "#b0aef3",
          400: "#978dec",
          500: "#7963e0",
          600: "#7656d5",
          700: "#6647bb",
          800: "#533b98",
          900: "#463679",
          950: "#292046",
        },
      },
    },
  },
  plugins: [],
};
