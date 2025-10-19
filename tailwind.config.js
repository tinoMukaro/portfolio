
export default {
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}" , 
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease forwards",
        slideUp: "slideUp 0.6s cubic-bezier(.22,.9,.34,1) forwards",
      },
    },
  },
  plugins: [],
};
