//HTTP - Hypertext Transfer Protocol

const fs = require('fs');
const http = require('http');

//Creating server
const server = http.createServer((req, res) => {
    if (req.url == '/') {
    res.writeHead(200, { 'content-type' : "application/json"})
    res.end('{"Name" : "Kadhir S"}')
    }else if (req.url == "/about") {
    res.writeHead(200, { 'content-type' : "text/plain"})
    res.end("Welcome to About Page")
    }else if (req.url == "/file") {
        const readStream = fs.createReadStream("./VID20240206170425.mp4")
        res.writeHead(200, { 'content-type' : "video/mp4"})
        readStream.pipe(res)
    //createReadStream breaks the video into chunks to prevent high usage of memory
    
    }else {
        res.writeHead(404, { 'content-type' : "application/json"})
        res.end("404 Page not found")

    }
})


//Expose Port
server.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000")
})