//HTTP - Hypertext Transfer Protocol

const http = require('http');

//Creating server
const server = http.createServer((req, res) => {
    if (req.url == '/') {
    res.writeHead(200, { 'content-type' : "application/json"})
    res.end('{"Name" : "Kadhir S"}')
    }else if (req.url == "/about") {
    res.writeHead(200, { 'content-type' : "text/plain"})
    res.end("Welcome to About Page")
    } else {
        res.writeHead(404, { 'content-type' : "application/json"})
        res.end("404 Page not found")

    }
})

//Expose Port
server.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000")
})