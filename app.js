const express = require("express");
const path = require("path");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const pool = require("./db/database");
const passport = require("passport");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const indexRouter = require("./routes/index");
const membershipRouter = require("./routes/membership");


const app = express();

require("./db/passport");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

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

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter)
app.use("/log-in", loginRouter);
app.use("/register", registerRouter);
app.use("/membership", membershipRouter);

app.listen(3000, ()=> {
    console.log("Listening in on port 3000.");
})