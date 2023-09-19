/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      widths: {
        width: "100px",
      },
      colors: {
        navBar: "hsl(209, 23%, 22%)",
        background: " hsl(207, 26%, 17%)",
        textBase: " hsl(0, 0%, 98%)",
        lightHover: "rgba(0,0,0,0.04)",
        lightHover2: "rgba(256,256,256,0.2)",
        textColor: "#656F79",
      },
    },
  },
  plugins: [],
};
