module.exports = {
  plugins: {
    'postcss-import': {},
    '@tailwindcss/jit': {},
    'postcss-nested': {
      unwrap: ['screen'],
    },
    'autoprefixer': {}
  },
}