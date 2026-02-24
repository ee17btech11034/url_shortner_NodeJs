//These are for Methods for Urls
const { urlModel } = require("../models/url")
const { nanoid } = require("nanoid")

async function handleRedirectUrl(req, res){ 
    // console.log(req.body) //This is not working properly because " https://www.browserstack.com/guide/what-is-the-content-type-header"
    // const shortId = req.body.shortId //we should not use . in key filter (line 8)

    //  we can use dynamic routing with dirrent path and routing
    const shortId = req.params.shortId //we should not use . in key filter (line 8) 
    const url_entry = await urlModel.findOneAndUpdate(
        {shortId},
        {
            $push:{
                visitedHistory:{timestamp: Date.now()}
            },
            $inc: { noOfClicks: 1 }
        },
        // { new: true } // Optional: return updated document -> Warning: mongoose: the `new` option for `findOneAndUpdate()` and `findOneAndReplace()` is deprecated. Use `returnDocument: 'after'` instead.
        { returnDocument: 'after' },
    )
    if (!url_entry){
        return res.status(400).send(`No URL exist for this: ${req.body.shortId}`)
    }
    return res.status(300).send(`Redirecting to link: ${url_entry.redirectUrl}`)
}

async function handleCreateUrl(req, res){
    const redirectUrl = req.body.redirectUrl
    const url_entry = await urlModel.findOne({redirectUrl})
    if (url_entry){
        return res.status(200).send(`Short ID is: ${url_entry.shortId}`)
    }
    const generatedShortId = nanoid(8) //generate a short id
    const new_url = await urlModel.create({
        redirectUrl: req.body.redirectUrl,
        shortId: generatedShortId,
        visitedHistory: [{timestamp: Date.now()}],
        noOfClicks: 0,
    })
    return res.status(201).send(`Short ID is: ${new_url.shortId}`)
}

module.exports = {handleRedirectUrl, handleCreateUrl}