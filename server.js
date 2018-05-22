const express = require('express')
const app = express()
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const compiler = webpack(webpackConfig)

app.use(express.static(__dirname + '/www'))

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  }
}))

app.listen(3000, function() {
    console.log('Listening on port 3000!')
})

