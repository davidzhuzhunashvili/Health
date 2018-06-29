const bcrypt = require('bcryptjs')
const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

module.exports = (passport) => {
  passport.serializeUser((user, done) => { done(null, user.id) })
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => { done(err, user) })
  })

  passport.use('local-login', new LocalStrategy(
    (username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) { return done(err) }

        if (!user) {
          return done(null, false, { message: 'Invalid username.' })
        }

        bcrypt.compare(password, user.password, (err, res) => {
          if (err) return done(err)

          if (res === false) {
            return done(null, false, { message: 'Invalid password.' })
          }

          return done(null, user)
        })
      })
    }
  ))

  passport.use('local-signup', new LocalStrategy(
    (username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) return done(err)

        if (user) return done(null, false, { message: 'Username already exists.' })

        if (!password || !username) {
          return done(null, false, { message: 'Invalid username or password.' })
        }

        bcrypt.genSalt(10, (err, salt) => {
          if (err) return done(err)

          bcrypt.hash(password, salt, (err, hash) => {
            if (err) return done(err)

            const user = new User({
              username: username,
              password: hash
            })

            user.save((err, data) => {
              if (err) return done(err)
              return done(null, user)
            })
          })
        })
      })
    }
  ))
}