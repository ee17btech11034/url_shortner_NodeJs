const express = require("express")
const { connectMongoDb } = require("./connections")
const { router } = require("./routes/url")

const portNumber = 8000

//connect to MongoDB -> go to cmd > `mongosh` to get the url
const dbName = "short-urls"
const mongoUrl = `mongodb://localhost:27017/${dbName}`

connectMongoDb(mongoUrl)
    .then(()=>console.log("MongoDB is connected"))
    .catch((err)=>console.log("Error while connecting to MonoDB"))

const app = express()

app.use(express.json()) //middleware to take input of JSON 

app.use("/url", router)
app.listen(portNumber, ()=>{console.log(`Server started: http://localhost:${portNumber}/`)})