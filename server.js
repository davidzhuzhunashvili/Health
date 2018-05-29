const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const compiler = webpack(webpackConfig)
const mongoose = require('mongoose')
const databaseURL = process.env.MONGODB

/* Routes */
const nutrition = require('./server/routes/nutrition')

/* Mongoose setup */
mongoose.connect(databaseURL)
mongoose.connection.once('open', () => console.log('Connected to Database!'))

/* Serve files from ./www */
app.use(express.static(__dirname + '/www'))

/* Request body middleware for parsing + allows request values to be anything */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Webpack middleware to create bundle.js and recompile on change */
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  }
}))


app.use('/nutrition', nutrition)






app.listen(3000, () => console.log('Listening on port 3000!'))
