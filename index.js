const path = require("path")
const express = require("express")
const mongoose = require("mongoose")

const portNumber = 8000

//connect to MongoDB -> go to cmd > `mongosh` to get the url
const dbName = "blog-app"
const mongoUrl = `mongodb://localhost:27017/${dbName}` //we will have to use env variables for production as we do not know which port will be given to us.

mongoose.connect(mongoUrl)
    .then(()=>{console.log("MongoDB is connected")})
    .catch(()=>{console.log("Error while connecting to MongoDB")})

const app = express()
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.get("/", (req, res)=>{
    res.render("homePage")
})


app.listen(portNumber, ()=>{console.log(`Server started: http://localhost:${portNumber}/`)})