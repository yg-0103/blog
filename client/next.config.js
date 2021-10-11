// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
  },
}

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings)
