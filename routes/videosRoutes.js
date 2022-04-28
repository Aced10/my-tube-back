const router = require("express").Router();

// Controllers
const videosController = require("../controllers/videos/videosController");

router.get("/search/:keyword", videosController.getSearch);

module.exports = router;