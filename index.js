const http = require('http')

// const myServer = http.createServer() // it will create a web server for us.
/*
But we need a "handler function" to handle that what we want to do for which request.
it has 2 args 1. req 2. res => request and response
server call this handler whenever a rquest comes to server.
*/

const myServer = http.createServer((req, res)=>{
    console.log(req.headers)
    res.end("Hello from Server")
})

// We need a port Number to listen to that request. Port is a gate (like CPU cores in a machine) like 8000, 8001, 2, 3, ...etc

myServer.listen(8000, ()=>(console.log("Server Started: http://localhost:8000/"))) // callback runs when all are done.
// got to "http://localhost:8000/"