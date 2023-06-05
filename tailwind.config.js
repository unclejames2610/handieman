const {
  DefaultRouteMatcherManager,
} = require("next/dist/server/future/route-matcher-managers/default-route-matcher-manager");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "main-dark": "#202122",
      "alt-dark": "#333333",
      "main-blue": "#318deb",
      white: "#ffffff",
      transparent: "transparent",
      red: "#FF0000",
    },
  },
  plugins: [],
};
