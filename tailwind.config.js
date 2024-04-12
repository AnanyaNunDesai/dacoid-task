/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
