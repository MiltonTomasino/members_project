const bcrypt = require("bcrypt");
const pool = require("../db/database");
const saltRounds = 10;

module.exports.genPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        console.error("Error hashing password: ", error);
    }
}

module.exports.validatePassword = async (password, storedPassword) => {
    return bcrypt.compare(password, storedPassword);
}