const theme = require('dr066-ba-design-token-builder/tailwindTheme');

module.exports = {
  mode: "jit",
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/dr066-ba-development-system/src/**/*.{vue,js,ts,jsx,tsx}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...theme
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
