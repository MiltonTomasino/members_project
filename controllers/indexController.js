const pool = require("../db/database");

module.exports.getHomePage = (req, res) => {
    res.render("index", { title: "Home Page" });
}