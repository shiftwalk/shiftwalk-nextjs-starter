module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Futura", "Arial", "sans-serif"],
      mono: ["Lucida Console", "Courier", "monospace"],
      neueLight: ["Neue-Light"],
      neueRegular: ["Neue-Regular"],
      neueBold: ["Neue-Bold"],
      futuraLight: ["Futura-Light"],
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "2000px",
    },
    extend: {
      colors: {
        black: "#000",
        white: "#FFF",
        gray: "fbae17",
        palette: {
          blue: "#105099",
          light: "#EAE9E5",
        },
        "example-color": {
          light: "#EAE9E5",
          DEFAULT: "#d18d67",
          dark: "#ce8860",
        },
      },
      height: (theme) => ({
        "50vh": "50vh",
        "75vh": "75vh",
      }),
    },
  },
  plugins: [],
};
