const express = require('express')
const router = express.Router()
const API = require('../api/api-interface')

router.get('/', (req, res) => {
  res.send('INFO')
})





module.exports = router