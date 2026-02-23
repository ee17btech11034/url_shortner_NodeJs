const mongoose = require("mongoose");

/* Not a good practice
async function connectMongoDB(mongoUrl){
    return await mongoose.connect(mongoUrl).then(()=>console.log("Mongoose is connected...")).catch((err)=>console.log("Error occured while connecting MongoDB"))
}

because here we return "undefined" as everything is resolved here only." Better to return promise and resolve it in main code.
*/
async function connectMongoDB(mongoUrl){
    return await mongoose.connect(mongoUrl)
}

module.exports = {connectMongoDB}