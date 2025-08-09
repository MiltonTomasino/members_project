const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.genPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        console.error("Error hashing password: ", error);
    }
}