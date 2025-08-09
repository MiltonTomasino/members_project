const router = require("express").Router();
const controller = require("../controllers/loginController");

router.get("/", controller.getLoginPage);

module.exports = router;