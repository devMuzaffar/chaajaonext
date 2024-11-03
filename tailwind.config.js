/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        primary: "#A91517",
        secondary: "#FFC20E",
      },
      backgroundColor: {
        primary: "#A91517",
        secondary: "#FFC20E",
      },
      backgroundImage: {

        // For Hero Images
        card1: "url('/assets/card/1.png')",
        "card1-mobile": "url('/assets/card/1-mobile.png')",
        card2: "url('/assets/card/2.jpeg')",
        "card2-mobile": "url('/assets/card/2-mobile.png')",
        card3: "url('/assets/card/3.jpeg')",
        "card3-mobile": "url('/assets/card/3-mobile.jpeg')",
        card4: "url('/assets/card/4.jpeg')",
        "card4-mobile": "url('/assets/card/4-mobile.jpg')",

        // For Achievements Images
        achv1: "url('/assets/achievements/1.jpeg')",
        "achv1-mobile": "url('/assets/achievements/1-mobile.jpeg')",
        achv2: "url('/assets/achievements/2.jpeg')",
        "achv2-mobile": "url('/assets/achievements/2-mobile.jpeg')",
        achv3: "url('/assets/achievements/3.jpeg')",
        "achv3-mobile": "url('/assets/achievements/3-mobile.jpeg')",
        achv4: "url('/assets/achievements/4.jpeg')",
        "achv4-mobile": "url('/assets/achievements/4-mobile.jpeg')",
        achv5: "url('/assets/achievements/5.jpeg')",
        "achv5-mobile": "url('/assets/achievements/5-mobile.jpeg')",
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
