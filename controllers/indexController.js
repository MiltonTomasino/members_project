const pool = require("../db/database");

module.exports.getHomePage = (req, res) => {
    res.render("index", { title: "Home Page" });
}

module.exports.registerUser = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const membership = req.body.membership ? true : false;
    console.log(firstname, lastname, email, password, membership);
    
}