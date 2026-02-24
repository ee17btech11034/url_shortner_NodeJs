const express = require("express")
const { connectMongoDb } = require("./connections")
const { router } = require("./routes/url")
const path = require("path")
const { urlModel } = require("./models/url")

const portNumber = 8000

//connect to MongoDB -> go to cmd > `mongosh` to get the url
const dbName = "short-urls"
const mongoUrl = `mongodb://localhost:27017/${dbName}`

connectMongoDb(mongoUrl)
    .then(()=>console.log("MongoDB is connected"))
    .catch((err)=>console.log("Error while connecting to MonoDB"))

const app = express()

app.set("view engine", "ejs") //set vew engine
app.set("views", path.resolve("./views")) //we will find views in this path

app.use(express.json()) //middleware to take input of JSON 

app.use("/url", router)

app.get("/", (req, res)=>{
    return res.render('home') //this home is refering to home.ejs file but we need to use res.render
})

app.get("/allurls", async (req, res)=>{ //we can pass obj as args
    const allUrls = await urlModel.find({})
    return res.render('showAllUrls', {
        urls : allUrls,
    }) 
})

app.listen(portNumber, ()=>{console.log(`Server started: http://localhost:${portNumber}/`)})