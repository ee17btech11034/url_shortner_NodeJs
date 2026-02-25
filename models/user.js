const { Schema, model } = require("mongoose")
const { createHmac, randomBytes } = require('crypto');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: { //for password hashing
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    profileImg: {
        type: String,
        default: "../public/photos/mango_profileImg.webp",
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"], //this tells user can either be "USER" or "ADMIN". This helps us to authentication, throw error if any different val is given
        default: "USER",
    }

},{timestamps: true})


// userSchema.pre("save", ()=>) //can not use arrow function as we need this keyword refering to object.
userSchema.pre("save", function (next){
    const user = this; //here this keyword is pointing to the "curent user" -> check by hovering this 
    if (!user.isModified("password")) return;

    //if changed then we will encrypt password
    const salt = randomBytes(16).toString() //random string for salt

    const hashPassword = createHmac('sha256', salt) //'sha256' -> is an algorithm we will use
               .update(user.password)
               .digest('hex');
    
    this.password = this.password;
    this.salt = salt;

    next();
})

const userModel = model("user" ,userSchema)

module.exports = { userModel }