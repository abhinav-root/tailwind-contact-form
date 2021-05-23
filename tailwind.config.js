const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cyan": colors.cyan,
        "teal": colors.teal,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
