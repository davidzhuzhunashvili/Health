/* Interface that combines the actual api calls for easier access. */
const nutrientsAPI = require('./nutrients-api')

const getList = (options) => nutrientsAPI.getList(options)

const getSearch = (options) => nutrientsAPI.getSearch(options)

const getV2Reports = (options) => nutrientsAPI.getV2Reports(options)

module.exports = {
  getList,
  getSearch,
  getV2Reports
}