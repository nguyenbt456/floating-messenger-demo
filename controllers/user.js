module.exports.getUserPage = (req, res) => {
    res.render('user', { user: req.user })
}