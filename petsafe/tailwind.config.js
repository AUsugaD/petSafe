import { Terser } from 'vite';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#55423c",
        secons: "#b28d40",
        tersery: "#f9b838",
        
      }
    },
  },
  plugins: [],
}