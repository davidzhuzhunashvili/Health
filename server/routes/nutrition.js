const express = require('express')
const router = express.Router()
const helpers = require('../helper-functions')
const _ = require('underscore')
const API = require('../api/api-interface')


router.get('/', (req, res) => {
  console.log(req.query)
  API.getSearch(req.query).then((body) => {
    return body.list.item.map((item) => item.ndbno)
  }).then((ids) => {
    return API.getV2Reports({ ndbno: ids })
  }).then((reports) => {
    const nameNutrients = []

    reports.foods.forEach((item) => {
      const object = {}
      let name = helpers.stripNumber(item.food.desc.name)
      name = helpers.titleCase(name)

      item.food.nutrients.forEach((nutrient) => {
        const nutrientID = nutrient.nutrient_id
        object[nutrientID] = nutrient
      })

      /* If there is no energy info add an empty one in */
      if(!_.has(object, '208')) {
        object['208'] = { value: 'NO INFO FOUND' }
      }

      nameNutrients.push({
        name: name,
        nutrients: object 
      })
    })

    res.send(nameNutrients)
  }).catch((err) => {
    console.log(err)
    res.send([])
  })
})

router.get('/list', (req, res) => {

})



module.exports = router