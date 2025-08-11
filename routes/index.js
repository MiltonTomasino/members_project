const router = require("express").Router();
const controller = require("../controllers/indexController");
const { isMember, isLoggedIn } = require("./authMiddleware");

router.get("/", isLoggedIn, controller.getIndexPage);
router.get("/log-out", (req, res, next) => {
    req.logout(function (err) {
        if(err) return next(err);
        res.redirect("/log-in");
    });
})

module.exports = router;