const express = require("express")
const urlHandlers = require("../controllers/url") 

const router = express.Router()

router.route("/")
    .post(urlHandlers.handleCreateUrl) // create a shortId for given link

router.route("/:shortId")
    .get(urlHandlers.handleRedirectUrl) //redirect user to actual link from shortId


    module.exports = { router }