const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/logout', (req, res) => {
  req.logout()
  res.send({ logout: true })
})

router.get('/auth', (req, res) => {
  if (req.isAuthenticated()) return res.send({ authenticated: true })
  return res.send({ authenticated: false })
})

router.post('/login', passport.authenticate('local-login'), (req, res, x) => {
  console.log('HI');
})

router.post('/signup', passport.authenticate('local-signup'), (req, res, x) => {
  console.log('HELLO')
})

module.exports = router