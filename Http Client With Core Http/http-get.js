const http = require('http')
const url = 'http://nodeprogram.com'
http.get(url, (response) => {
  var rawData = ''
  response.on('data', (chunk) => { 
    rawData += chunk
  })
  response.on('end', () => {
    console.log(rawData)
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})