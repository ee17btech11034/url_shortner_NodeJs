const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    redirectUrl:{
        type: String,
        unique: true,
        required: true,
    },
    shortId:{
        type: String,
        unique: true,
        required: true,
    },
    visitedHistory:[{ timestamp: { type: Number}}
    ],
    noOfClicks:{
        type: Number,
    }
}, {timestamps: true})


const urlModel = mongoose.model('url', urlSchema)

module.exports = { urlModel }