const { Router } = require("express")

const router = Router()

router.route("/login")
    .get((req, res)=>res.render("signInForm")) //provide form to user to fill the details
    // .post()