/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        Roboto: ["Roboto"]
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
