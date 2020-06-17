
const { getLandingPage } = require('../controllers/index')
const { getUserPage } = require('../controllers/user')
const { getFacebookLogin, getFacebookCallback } = require('../controllers/facebookLogin')
const { getWebhookAuthentication, postWebhook } = require('../controllers/facebookWebhook')


const express = require('express')

const router = express.Router()

router.get('/', getLandingPage)

router.get('/auth/facebook', getFacebookLogin)
router.get('/auth/facebook/callback', getFacebookCallback)
router.get('/webhook/facebook', getWebhookAuthentication)
router.post('/webhook/facebook', postWebhook)

router.get('/user', getUserPage)

module.exports = router