/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        widescreen: "3/1",
      },
      fontFamily: {
        brand: ["var(--font-unbounded)", ...defaultTheme.fontFamily.sans],
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: "#904D27",
        primary: "#111111",
      },
    },
  },
  plugins: [],
};
