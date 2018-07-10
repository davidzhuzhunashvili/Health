const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/logout', (req, res) => {
  req.logout()
  res.send({ logout: true })
})

router.get('/authenticated', (req, res) => {
  if (req.isAuthenticated()) return res.send({ authenticated: true })
  return res.send({ authenticated: false })
})

router.get('/logout', (req, res) => {
  req.logout()
})

router.post('/login', (req, res) => {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) return res.send({ success: false, info: { err } })
    if (!user) return res.send({ sucess: false, info })
    req.logIn(user, (err) => {
      if (err) return res.send({ success: false, info: { message: 'Login failed.' } })
      return res.send({ success: true, info: { message: 'Successful login.' } })
    })
  })(req, res)
})

router.post('/signup', (req, res) => {
  passport.authenticate('local-signup', (err, user, info) => {
    if (err) return res.send({ success: false, info: { err } })
    if (!user) return res.send({ success: false, info })

    return res.send({ success: true, info: { message: 'Successful signup.' }})
    
    /* POSSIBLE ADDITION TO AUTO LOGIN AFTER SIGNUP
    req.login(user, (err) => {
      if (err) return res.send({ success: false, info: { err } })
      return res.send({ success: true, info: { message: 'Successful signup.' } })
    }) 
    */

  })(req, res)
})


module.exports = router