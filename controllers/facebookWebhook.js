const Int64 = require('node-int64')

function getWebhookAuthentication(req, res) {
    var whMode = req.query['hub.mode']
    var whChallenge = req.query['hub.challenge']
    var whVerifyToken = req.query['hub.verify_token']

    var intChallenge = parseInt(whChallenge, 10)
    res.json(intChallenge)
}

function postWebhook(req, res) {
    console.log("Webhok Data: ",req.body)
}

module.exports = {
    getWebhookAuthentication,
    postWebhook
}