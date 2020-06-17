module.exports.getLandingPage = (req, res) => {
    res.render('index', { user: req.user })
}