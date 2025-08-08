const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    host: "localhost",
    user: process.env.DB_USER,
    database: "members_project",
    password: process.env.DB_PASSWORD,
    host: 5432
})

module.exports = pool;