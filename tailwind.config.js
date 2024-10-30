/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#A91517",
        secondary: "#FFC20E",
      },
      backgroundImage: {
        "card1": "url('/assets/card/1.png')",
        "card1-mobile": "url('/assets/card/1-mobile.png')",
        "card2": "url('/assets/card/2.jpeg')",
        "card2-mobile": "url('/assets/card/2-mobile.png')",
        "card3": "url('/assets/card/3.jpeg')",
        "card3-mobile": "url('/assets/card/3-mobile.jpeg')",
        "card4": "url('/assets/card/4.jpeg')",
        "card4-mobile": "url('/assets/card/4-mobile.jpg')",
      },
      textColor: {
        primary: "#A91517",
        secondary: "#FFC20E",
      },
      screens: {
        xs: "376px",
        xxs: "321px",
      },
    },
  },
  plugins: [],
};
