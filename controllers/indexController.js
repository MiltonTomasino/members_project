const pool = require("../db/database");

module.exports.getIndexPage = async (req, res) => {
    const messages = await this.getMessages();
    res.render("index", { title: "Index Page", messages: messages, user: req.user});
}

module.exports.getMessages = async () => {
    const { rows } = await pool.query(`SELECT m.id, CONCAT(firstname, ' ', lastname) as fullname, title, message, m.created_at
                                        FROM messages as m
                                        JOIN users
                                        ON m.messenger = users.id`
        );
    return rows;
}

module.exports.sendMessage = async (req, res) => {
    const { title, message } = req.body;
    const id = req.user.id;
    try {
        await pool.query("INSERT INTO messages (messenger, title, message) VALUES ($1, $2, $3)", [id, title, message]);
        res.redirect("/");
    } catch (error) {
        console.error("Error inserting into messages");
    }
}

module.exports.deleteMessage = async (req, res) => {
    const { messageId } = req.body;
    try {
        await pool.query("DELETE FROM messages WHERE id = $1", [messageId]);
        res.redirect("/");
    } catch (error) {
        console.error("Error deleting message");
    }
}

