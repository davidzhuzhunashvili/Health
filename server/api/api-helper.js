const apiKey = process.env.USDA_API_KEY

function getHeaders(endPoint) {
  return {
    url: `https://api.nal.usda.gov/ndb/${endPoint}`,
    json: true,
    headers: {
      'Content-Type': 'application/json',
    }
  }
}

function getApiRequest(endPoint, body) {
  const request = getHeaders(endPoint)
  request.url += `?api_key=${apiKey}`
  request.body = body

  return request
}

module.exports = getApiRequest