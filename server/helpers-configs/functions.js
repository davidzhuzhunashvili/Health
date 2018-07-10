/* Convert input string to title case */
const titleCase = (str) => str.split(' ')
  .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')

const stripNumber = (str) => str.split(', UPC: ')[0].split(', GTIN: ')[0]

const trimName = (str) => (str.length > 40) ? str.slice(0, 40) + '...' : str

const authenticated = (req, res, next) => { 
  if (!req.isAuthenticated()) return res.send({ err: 'Unauthenticated' })
  return next()
}

const ISODateFormat = (date) => {
  const d = date.getDate()
  const m = date.getMonth() + 1
  const y = date.getFullYear()

  return y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
}

module.exports = {
  titleCase,
  stripNumber,
  trimName,
  authenticated,
  ISODateFormat
}

