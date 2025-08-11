const router = require("express").Router();
const controller = require("../controllers/registerController");
const { isMember, preventSecondLogIn } = require("./authMiddleware");

router.get("/", preventSecondLogIn, controller.getRegisterPage);
router.post("/", preventSecondLogIn, controller.registerUser);

module.exports = router;