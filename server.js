const express = require('express')
const app = express()
const expressSession = require('express-session')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const compiler = webpack(webpackConfig)
const mongoose = require('mongoose')
const databaseURL = process.env.MONGODB
const User = require('./server/models/user')
const passport = require('passport')
const passportSetup = require('./server/helpers-configs/passport')
const authenticated = require('./server/helpers-configs/functions').authenticated

/* Import routes */
const nutrition = require('./server/routes/nutrition')
const auth = require('./server/routes/auth')

/* Mongoose setup */
mongoose.connect(databaseURL)
mongoose.connection.once('open', () => { console.log('Connected to Database!') })

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

/* Express sessions setup */
app.use(expressSession({
  secret: 'TEMPORARY_SECRET',
  resave: true,
  saveUninitialized: true,
  cookie: { path: '/', httpOnly: true, secure: false, maxAge: null }
}))

/* Passport initialization */
app.use(passport.initialize())
app.use(passport.session())
passportSetup(passport)


/* Routes */
app.use('/nutrition', nutrition)

app.use('/auth', auth)


app.get('*', (req, res) => { res.sendFile(__dirname + '/www/index.html') })
app.listen(process.argv[2] || 3000, () => {
  console.log(`Listening on port ${process.argv[2] || 3000}`)
})