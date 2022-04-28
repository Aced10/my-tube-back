const router = require("express").Router();

// Controllers
const loginController = require("../controllers/login/loginController");

router.post("/google-login", loginController.login);

module.exports = router;