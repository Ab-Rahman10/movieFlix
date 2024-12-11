/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        CinzelDecorative: ["Cinzel Decorative", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
