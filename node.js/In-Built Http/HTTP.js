//HTTP - Hypertext Transfer Protocol

const http = require('http');

//Creating server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type' : "text/plain"})
    res.end("Hello World")
})


//Expose Port
server.listen(1230, () => {
    console.log("Server is running on port http://localhost:1230")
})