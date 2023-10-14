const http = require('http')
const https = require('https')
const fs = require('fs')

const server = http.createServer((req, res) => {

res.writeHead(200, { 'content-type': 'text/html' })

fs.createReadStream('app.html').pipe(res) })

server.listen(process.env.PORT || 3000)
