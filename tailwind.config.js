module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        thebikermantheme: {
          primary: "#ADEFD1FF",
          secondary: "#00203FFF",
          "secondary-content": "#00303f",
          accent: "#FCA311",
          neutral: "#3d4451",
          "warning": "#FC766AFF",
          "base-100": "#ffffff",
          "warning-content": "#5B84B1FF",
          "error": "#5F4B8BFF",
          "error-content": "#E69A8DFF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
