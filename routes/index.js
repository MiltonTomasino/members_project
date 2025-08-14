const router = require("express").Router();
const controller = require("../controllers/indexController");
const { isMember, isLoggedIn, isAdmin } = require("./authMiddleware");

router.get("/", controller.getIndexPage);
router.get("/log-out", (req, res, next) => {
    req.logout(function (err) {
        if(err) return next(err);
        req.session.destroy(err => {
            if (err) console.error("Session destroy error: ", err);
            res.redirect("/log-in");
        })
    });
});
router.post("/send-message", isLoggedIn, controller.sendMessage);
router.post("/delete-message", isAdmin, controller.deleteMessage);

module.exports = router;