const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'POST'){
        res.writeHead(200,{
            "Content-type":"application/json"
        })
        res.end('Server ready')
    }else if(req.url === '/' && req.method === "GET"){
        res.writeHead(200,{
            "Content-type":"application/json"
        })
        res.end('Server ready get method')
    }
})

server.listen(3002,() => {
    console.log("Server running on 3002")
})