const theme = require('dr066-ba-design-token-builder/tailwindTheme');
theme.extend.animation = {
  'ping-slow': 'ping 1s linear infinite',
}

module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
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
