const express = require('express')
const router = express.Router()
const User = require('../models/user')
const helpers = require('../helpers-configs/functions')

router.put('/itemList', (req, res) => {
    const username = req.user.username
    const itemList = req.body.itemList
    const today = helpers.ISODateFormat(new Date())
    
    User.findOne({ username })
    .then((user) => {
      let includesToday = false
      user.dates.forEach((dateItem, index) => {
        if (dateItem.date === today) {
          includesToday = true
          user.dates[index].nutritionItems = itemList || []
        }
      })
      if (!includesToday) {
        const dateObject = {
          date: today, 
          weight: 240,
          nutritionItems: itemList
        }
        user.dates.push(dateObject)
      }  

      return [user, user.save()]
    }).then((results) => {
      res.send(results[0])
    })
    .catch((err) => { 
      console.log(err) 
      res.send({ success: false })
    })

})


module.exports = router