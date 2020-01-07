// Handle 2 requests on same route with different method
// 1. GET on '/users' route where return a simple HTML form with name and email field
// 2. POST on '/users' route with a message 'Posted for the first time'.
const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    if (req.url === '/form' && req.method === "GET") {
        res.writeHead(200, { 'Content-type': 'text/html' })
        fs.createReadStream('./form.html', 'utf-8').pipe(res);
        var q = url.parse(req.url, true)
        console.log(q)
    }
    else if (req.method === "POST" && req.url === '/form') {
        var formData = req.body;
        console.log(req.body)
        res.end('Post method')
    } else {
        console.log('Error')
    }
}).listen(3200)