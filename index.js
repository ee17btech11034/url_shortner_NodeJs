const http = require('http')
const portnumber = 8000;
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res)=>{
    if (req.url === "/favicon.ico"){ //This is adding extra log in txt log file
        return res.end();
    }
    // console.log(req)
    // console.log(req.url)
    // res.end("hello") // if we do not write this then server won't send anything and user browser's window will show just restart. As he is waiting for re.

    const logline = `User requested for Path "${req.url}" with HTTP Method "${req.method}" at timestamp: ${Date.now()}\n`
    // console.log(logline)

    // res.end(logline)

    const myUrl = url.parse(req.url)
    // const myUrl = url.parse(req.url, true) //ye queries ko object format me bana deta hai na ki string format me 
    console.log("Parsed url: ", myUrl)

    fs.appendFile("./user_req_logs.txt", logline, (err, result)=>{
        if (err){
            console.log("Some error occured while appending data into log file.");
        }
        else{
            console.log("Successfully append data.");
        }
        switch (req.url) { //myurl.pathName par bhi apply kr sakte hai
            case "/":
                res.end("Home Page")
                break;
            case "/about":
                res.end("About Page")
                break;
            case "/contact-us":
                res.end("Contact Us")
                break;
            default:
                res.end("Error 404 -> page Not found!")
                break;
        }
    })

})

myServer.listen(portnumber, ()=>(console.log(`Server Started: http://localhost:${portnumber}/`)));