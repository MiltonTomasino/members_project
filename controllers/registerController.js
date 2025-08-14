const pool = require("../db/database");
const utils = require("./utils");

module.exports.getRegisterPage = (req, res) => {
    res.render("register", { title: "Registration" });
}

module.exports.registerUser = async (req, res) => {
    const { firstname, lastname, email, password} = req.body;
    const newPassword = await utils.genPassword(password);
    console.log(firstname, lastname, email, newPassword, membership);

    try {
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        await pool.query(
            "INSERT INTO users (firstname, lastname, email, password, membership) VALUES ($1, $2, $3, $4, $5)",
            [firstname.trim(), lastname.trim(), email.trim().toLowerCase(), newPassword, membership]);
        res.redirect("/");
    } catch (error) {
        console.error("Error registering user.", error)
        res.status(500).json({ message: "Internal Server Error." });
    }
    
}

module.exports.getUser = async (email) => {
    const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return rows[0] || null;
}

module.exports.getUserById = async(id) => {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return rows[0] || null;
}