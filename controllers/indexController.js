const pool = require("../db/database");
const utils = require("../controllers/registerUtils");

module.exports.getHomePage = (req, res) => {
    res.render("index", { title: "Home Page" });
}

module.exports.registerUser = async (req, res) => {
    const { firstname, lastname, email, password} = req.body;
    const newPassword = await utils.genPassword(password);
    const membership = req.body.membership ? true : false;
    console.log(firstname, lastname, email, newPassword, membership);
    
}