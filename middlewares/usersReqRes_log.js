const fs = require("fs")

function logReqRes(filename){
    return (req, res, next)=>{
        // same details here
        next()
    }
}

module.exports = {logReqRes};