const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Supreme-Variable", ...defaultTheme.fontFamily.sans],
        supreme: ['Supreme-Variable', ...defaultTheme.fontFamily.sans],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        
      },
    },
  },
  plugins: [],
};
