/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        grape: "#3730a3",
        lemon: "#b3b0ff"
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
