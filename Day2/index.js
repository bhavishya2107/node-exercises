//Create a basic server and listen for request on port 5000.
const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })
    res.end('<h1>Server Created!!!</h1>')
}).listen(5000, () => {
    console.log('listening on port 5000')
})

//create a server and return a respnse 'My first server in NodeJS' and listen on port 5100
//create a server and console request headers, request url and request method.
http.createServer((req, res) => {
    console.log(req.headers, req.url, req.method)
    res.writeHead(202, {
        'Content-type': 'text/html'
    })
    console.log(req.headers)
    res.end('<h2>My first server in NodeJS</h2>')

}).listen(5100, () => {
    console.log('Listening on port 5100')
})


// create a server and return an HTML response(<h3>Welcome to altcampus</h3>) along with setting header using res.setHeader.
// 7. Repeat above (question 6) with header as writeHead.

const url = require('url')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    })
    if (req.url === '/') {
        res.end('<h1>Welcome to Alt-Campus</h1>')
    } else if (req.url === '/about') {
        res.end(`My name is Bhavishya.\nI am a student at AltCampus.\nI am so happy to be here.`)
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }
}).listen('3001', '127.0.0.1', () => {
    console.log('altcampus')
})

// Handle query params from the request on following url:
// - req url is `/users?email=nodeserver@gmail.com`
// - parse the  request url using parse method from url module
// - console pathname and return query params in response.

const parseUrl = url.parse('/users?email=nodeserver@gmail.com')
console.log(parseUrl)

// var adr = "https://localhost:4000/editors/dashboard?uname=asdf&key=ah463hg"
// var q = url.parse(adr, true);



