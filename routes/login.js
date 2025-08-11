const router = require("express").Router();
const controller = require("../controllers/loginController");
const passport = require("passport");
const { preventSecondLogIn } = require("../routes/authMiddleware");

router.get("/", preventSecondLogIn, controller.getLoginPage);
router.post("/", preventSecondLogIn, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in",
    failureFlash: true
}));

module.exports = router;