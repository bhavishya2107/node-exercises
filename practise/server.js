const http = require('http')
http.createServer((req, res) => {
    // res.writeHead(200,{
    //     'Content-type' : 'text/html'
    // })
    res.statusCode = "200"
    console.log(req.url, req.headers, req.method)
    res.end("<h1>Server started at port 3001</h1>")

}).listen(3001,() => {
    console.log('server started at port 3001')
})