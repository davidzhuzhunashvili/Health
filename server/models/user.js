const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  username: String,
  password: String,

  height: { type: Number, default: 0 },
  age: { type: Number, default: 0 },
  gender: String,
  dates: [{
    date: Date,
    weight: { type: Number, default: 0 },
    nutritionItems: [{
      calories: Number,
      /* Other nutritional info later */
    }]
  }]
})

module.exports = mongoose.model('User', User)
// For men:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) + 5
// For women:	BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(y) - 161