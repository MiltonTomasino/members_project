const pool = require("pg");

module.exports.getIndexPage = (req, res) => {
    res.render("index", { title: "Index Page"});
}