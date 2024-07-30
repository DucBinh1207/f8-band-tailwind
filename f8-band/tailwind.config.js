/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-1": "url('https://www.w3schools.com/w3images/la.jpg')",
        "banner-2": "url('https://www.w3schools.com/w3images/ny.jpg')",
        "banner-3": "url('https://www.w3schools.com/w3images/chicago.jpg')",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
