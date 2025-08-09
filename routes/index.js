const router = require("express").Router();
const controller = require("../controllers/indexController");

router.get("/", controller.getHomePage);
router.post("/register", controller.registerUser);

module.exports = router;