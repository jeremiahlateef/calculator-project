/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "9769x",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryColor1: "hsl(183, 100%, 15%)",
        primaryColor2: "hsl(186, 14%, 43%)",
        primaryColor3: "hsl(184, 14%, 56%)",
        primaryColor4: "hsl(185, 41%, 84%)",
        primaryColor5: " hsl(189, 41%, 97%)",
        whiteColor: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
