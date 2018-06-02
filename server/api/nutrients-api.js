const request = require('request')
const getApiRequest = require('./api-helper')

function getList(options) {
  return new Promise((resolve, reject) => {
    /* options: https://ndb.nal.usda.gov/ndb/doc/apilist/API-LIST.md */
    const requestParams = {
      lt: options.lt || 'f',
      max: options.max || '50',
      sort: options.sort || 'n'
    }

    const requestOptions = getApiRequest('list', requestParams)
    request(requestOptions, (err, res, body) => {
      resolve(body)
    })
  })
}

function getSearch(options) {
  return new Promise((resolve, reject) => {
    /* options: https://ndb.nal.usda.gov/ndb/doc/apilist/API-SEARCH.md */
    const requestParams = {
      q: options.query,
      max: options.max || '25'
    }

    const requestOptions = getApiRequest('search/', requestParams)
    request(requestOptions, (err, res, body) => {
      resolve(body)
    })
  })
}

function getV2Reports(options) {
  return new Promise((resolve, reject) => {
    /* options: https://ndb.nal.usda.gov/ndb/doc/apilist/API-FOOD-REPORTV2.md */
    const requestParams = {
      ndbno: options.ndbno,
      type: options.type || 'b',
    }

    const requestOptions = getApiRequest('V2/reports', requestParams)
    request(requestOptions, (err, res, body) => {
      resolve(body)
    })
  })
}

module.exports = {
  getList,
  getSearch,
  getV2Reports
}