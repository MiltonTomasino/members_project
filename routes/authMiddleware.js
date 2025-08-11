module.exports.isMember = (req, res, next) => {
    if (req.isAuthenticated() && req.user.membership){ next(); }
    else { res.redirect("/log-in"); }
}

module.exports.isLoggedIn = (req, res, nect) => {
    if (req.isAuthenticated()) next();
    else res.redirect("/log-in")
}