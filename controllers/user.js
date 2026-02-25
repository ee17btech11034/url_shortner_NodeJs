const { userModel } = require("../models/user")

function handlelogin(req, res){
    const { email, password } = req.body

    const user = userModel.findOne({email})

    if (!user){
        return res.render("signUpForm", {
            anyAlert: True,
        })
    }
}