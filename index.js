const http = require('http')
const portnumber = 8000;
const fs = require("fs")
const url = require("url")
const express = require("express")

const app = express() // creates an express application

 //-> // We should not write any code outside, it is screting problem for server start. We can use middleware to write code.
/*if (req.url === "/favicon.ico"){ //This is adding extra log in txt log file
    return res.end();
}
const logline = `User requested for Path "${req.url}" with HTTP Method "${req.method}" at timestamp: ${Date.now()}\n`

fs.appendFile("./user_req_logs.txt", logline, (err, result)=>{
    if (err){
        console.log("Some error occured while appending data into log file.");
    }
    else{
        console.log("Successfully append data.");
    }
*/
app.get("/", (req, res)=>{ //runs when GET request comes on path "/"
    return res.send("Home Page");
})

app.get("/about", (req, res)=>{ // /about/axx will go this page itself
    return res.send("About Page");
})
app.get("/contact-us", (req, res)=>{
    return res.send("Contact Us Page");
})

// We can replace this as well
// const myServer = http.createServer(app)
// myServer.listen(portnumber, ()=>{console.log(`Server Started: http://localhost:${portnumber}/`)});

app.listen(portnumber, ()=>{console.log(`Server started: http://localhost:${portnumber}/`)})