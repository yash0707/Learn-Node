const http = require('http')
const port = 3000
http.createServer((req, res) => {
  res.writeHead(201, {'Content-Type': 'text/plain'})
  res.end('Hello Yash\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)