module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sunshine: "#ec3323",
        corn: "#008aff",
      },
      backgroundImage: {
        back: "url('myBack.svg')",
        grid: "url('ttten.svg')",
        blur: "url('blur.svg')",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "2xl": "1536px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      boxShadow: {
        boxie:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
