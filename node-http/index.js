// https://github.com/nodejs/node/blob/v18.0.0/lib/http.js
// https://github.com/nodejs/node/blob/v17.0.0/lib/http.js
// https://github.com/nodejs/node/blob/v17.0.0/lib/_http_server.js
const http = require('http')

const PORT = 8282
const server = http.createServer()
server.emit('request')

server.on('request', (req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(
      '<form method="POST"><input type="text" name="name"><input type="submit" value="Subscribe!"></form>'
    )
    res.end()
  }
  if (req.method === 'POST') {
    console.log('POST:', req.url)
    let body = ''
    if (req.url === '/') {
      console.log('///')
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        // TODO: Content-Typeによってbodyの中身が変わる対応
        // console.log('called:', decodeURI(body))
        console.log('called:', body)
        res.writeHead(302, { Location: req.url })
        res.end()
      })
    } else if (req.url === '/json') {
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', () => {
        console.log('called:', body)
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(body)
        res.end()
      })
    }
  }
})

server.listen(PORT, () => {
  console.log(`http listen:${PORT}`)
})
