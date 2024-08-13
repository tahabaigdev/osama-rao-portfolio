/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    colors: {
      PrimaryColor: "#F46C38",
      SecondaryColor: "#C5FF41",
      Black1: "#151312",
      Black2: "#000000",
      Black3: "#1C1A19",
      Black4: "#353334",
      White1: "#FFFFFF",
      White2: "#B6B4BD",
      White3: "#998F8F",
      White4: "#6A6B6E",
      White5: "#EDECEC",
    },

    extend: {
      backgroundImage: {},
      boxShadow: {},
      keyframes: {},
      animation: {},
    },
    screens: {
      sm: "501px",
      md: "800px",
      lg: "1080px",
      xl: "1280px",
    },
  },
  plugins: [],
};
