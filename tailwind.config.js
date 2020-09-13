module.exports = {
  theme: {
    minWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    width: {
      icon: '50px',
      moviecard: '300px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    height: {
      icon: '50px',
      moviecard: '630px',
      poster: '450px',
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
