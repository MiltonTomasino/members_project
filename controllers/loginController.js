const pool = require("../db/database");

module.exports.getLoginPage = (req, res) => {
    res.render("login", {title: "Login" });
}