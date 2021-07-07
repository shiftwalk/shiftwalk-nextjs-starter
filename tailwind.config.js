module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}