const pool = require("../db/database");
require("dotenv").config();
const SECRET_PASSWORD = process.env.SECRET_PASSWORD;

module.exports.getMembershipPage = (req, res) => {
    res.render("membership", { title: "Membership Page" })
}

module.exports.checkMembershipPassword = async (req, res) => {
    if (req.body.membership_password === SECRET_PASSWORD) {
        try {
            await pool.query("UPDATE users SET membership = true WHERE id = $1", [req.user.id]);
            req.user.membership = true;
            res.redirect("/");
        } catch (error) {
            console.error("Error updating membership: ", error);
        }
    } else {
        res.redirect("/");
    }
}