/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        acp: ["adobe-caslon-pro", "serif"],
        Didot: ["linotype-didot", "serif"],
        Graphie: ["graphie", "sans-serif"],
      },
    },
  },
  plugins: [],
};
