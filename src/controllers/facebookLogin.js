const facebookClientID = process.env.FACEBOOK_CLIENT_ID || "1124804067852954"
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET || "3d836dbc4e499795f2a71b0c20102f34"

const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

passport.use(new FacebookStrategy({
        clientID: facebookClientID,
        clientSecret: facebookClientSecret,
        callbackURL: '/auth/facebook/callback'
    },
    function(accessToken, refreshToken, user, cb) {
        if (accessToken == null) {
            var err = new Error('AccessToken is null')
            return cb(err, user)
        }
        
        user.AccessToken = accessToken
        user.RefreshToken = refreshToken
        return cb(null, user)
}))

passport.serializeUser(function(user, cb) {
    cb(null, user)
})
passport.deserializeUser(function(obj, cb) {
    cb(null, obj)
})

function passportInitialize(app) {
    app.use(passport.initialize())
    app.use(passport.session())
}

var getFacebookLogin = passport.authenticate('facebook')
var getFacebookCallback = passport.authenticate('facebook', { successRedirect: '/user', failureRedirect: '/'})

module.exports = {
    passportInitialize,
    getFacebookLogin,
    getFacebookCallback
}