module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { A200_e5: "#545fe6e5" },
        black: { 900: "#000000" },
        blue_gray: {
          800: "#343d4b",
          900: "#222831",
          "900_01": "#272e37",
          "900_fc": "#272d37fc",
        },
        white: { A700: "#ffffff" },
        cyan: { "200_e5": "#90d9e0e5" },
      },
      fontFamily: { montserrat: "Montserrat" },
      boxShadow: { bs: "1px 2px  4px 0px #222831" },
      backgroundImage: {
        gradient: "linear-gradient(130deg ,#90d9e0e5,#545fe6e5)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
