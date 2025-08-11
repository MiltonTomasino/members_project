const router = require("express").Router();
const controller = require("../controllers/membershipController");
const { isLoggedIn } = require("./authMiddleware");

router.get("/", isLoggedIn, controller.getMembershipPage);
router.post("/", isLoggedIn, controller.checkMembershipPassword);

module.exports = router;