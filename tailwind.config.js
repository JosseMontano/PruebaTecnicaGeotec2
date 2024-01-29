/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "#065374",
        customSecondary: "#def4ff",
        customTertiary: "#0096d3",
        customQuartenary: "#00648d",
        customSenary: "#04354d",
      },
    },
  },
  plugins: [],
});
