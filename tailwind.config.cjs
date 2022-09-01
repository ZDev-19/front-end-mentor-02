/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {},
    colors: {
      "Bright-orange": "var(--Bright-orange)",
      "Dark-cyan": "var(--Dark-cyan)",
      "Very-dark-cyan": "var(--Very-dark-cyan)",
      "Transparent-white": "var(--Transparent-white)",
      "Very-light-gray": "var(--Very-light-gray)"
    },
    fontFamily: {
      'lexend': ['"Lexend Deca"', 'sans-serif'],
      "shoulders": ['"Big Shoulders Display"','cursive']
    }
  },
  plugins: [],
}
