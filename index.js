const express = require("express")
const { connectMongoDB } = require("./connections")
const userRouter = require("./routes/user")
const portnumber = 8000;
const mongoDbUrl = "mongodb://127.0.0.1:27017/shop-orders"
const {logReqRes} = require("./middlewares/usersReqRes_log")
const {addNewProperty} = require("./middlewares/addProperties")

const app = express() 

// connectMongoDB(mongoDbUrl) //As we discussed in connections file
connectMongoDB(mongoDbUrl)
    .then(()=>console.log("Mongoose is connected..."))
    .catch((err)=>console.log("Error occured while connecting MongoDB"))


app.use(express.urlencoded({extended : false})) 
//custom middleware
app.use(logReqRes("./abc.txt")) //middleware 1
app.use(addNewProperty()) //Middleware 2


app.use("/users", userRouter) // Go to this router if any request comes on "/users" path if startiing is "/users" then only

app.listen(portnumber, ()=>{console.log(`Server started: http://localhost:${portnumber}/`)})