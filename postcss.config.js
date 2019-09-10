const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')

module.exports = ctx => ({
  syntax: 'postcss-scss',
  plugins:
    ctx.env === 'development'
      ? [autoprefixer({ grid: true })]
      : [autoprefixer({ grid: true }), cssnano({ preset: 'default' })]
})
