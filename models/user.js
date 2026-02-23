const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ //Schema for userData collection in MongoDB
    first_name:{
        type: String,
        required: true, //user need to give first_name
    },
    last_name:{
        type: String, //last_name is optional
    },
    email: {
        type: String,
        required: true,
        unique: true, //emails can not be duplicate.
    },
    gender: {
        type: String,
    },
}, {timestamps: true}) // with this timestamp we will get the time of entry. -> track 2 entries-> created and updated


//Create a Model for Schema
const userModel = mongoose.model('user', userSchema)

module.exports = userModel;