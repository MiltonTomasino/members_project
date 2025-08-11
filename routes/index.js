const router = require("express").Router();
const controller = require("../controllers/indexController");
const { isMember, isLoggedIn } = require("./authMiddleware");

router.get("/", isLoggedIn, controller.getIndexPage);

module.exports = router;