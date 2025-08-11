module.exports.isMember = (req, res, next) => {
    if (req.isAuthenticated() && req.user.membership){ next(); }
    else { res.redirect("/log-in"); }
}

module.exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.redirect("/log-in")
}

module.exports.preventSecondLogIn = (req, res, next) => {
    if (req.isAuthenticated()) res.redirect("/");
    else next();
}