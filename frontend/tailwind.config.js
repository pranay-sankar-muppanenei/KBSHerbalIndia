/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ✅ important for purge
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui"],
        libre: ['"Libre Baskerville"', "serif"],
        lobster: ['"Lobster Two"', 'cursive'],
        metamorphous: ['Metamorphous', 'cursive'],
      },
    },
  },
  plugins: [],
};
