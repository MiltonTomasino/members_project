const router = require("express").Router();
const controller = require("../controllers/registerController");
const { isMember } = require("./authMiddleware");

router.get("/", controller.getRegisterPage);
router.post("/", controller.registerUser);

module.exports = router;