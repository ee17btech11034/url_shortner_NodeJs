const mongoose = require("mongoose")

async function connectMongoDb(mongoUrl){
    return await mongoose.connect(mongoUrl)
}

module.exports = { connectMongoDb }