/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4db3e',
        accent: {
          pink: '#ff6984',
          cyan: '#00d1ff',
        },
        bg: {
          blue1: '#def0fa',
          blue2: '#dcebf3',
          yellow: '#fafbf0',
          pink: '#fff5f7',
          cyan: '#f0fbff',
        },
      },
    },
  },
  plugins: [],
}
