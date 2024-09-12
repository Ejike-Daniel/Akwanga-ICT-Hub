/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/Pages/Home", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3563E9",
        activeBlue: " #031640",
        lightBlue: "#735CF6",
        gray: "#757575",
      },
      fontFamily: {
        manrope: "Manrope, sans-serif",
        inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [],
};
