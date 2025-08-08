const express = require("express")
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const pool = require("./db/database");
const indexRouter = require("./routes/index");


const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(session({
    store: new pgSession({
        pool: pool,
        tableName: "sessions"
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));

app.use("/", indexRouter);

app.listen(3000, ()=> {
    console.log("Listening in on port 3000.");
})