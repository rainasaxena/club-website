/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'darkblue': '#0F1922',
      'blue': '#0D232E',
      'teal': '#149F98',
      'grey': '#cccccc',
      'pink': '#CC1E66',
    },
    extend: {},
  },
  plugins: [],
}

