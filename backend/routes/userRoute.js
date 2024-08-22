const express = require("express");
const getUserController = require("../controllers/userController/getUserController");
const postUserController = require("../controllers/userController/postUserController");
const router = express.Router();
router.get("/", getUserController);
router.get("/id/:id", getUserController);
router.get("/lastname/:lastname", getUserController);
router.get("/firstname/:firstname", getUserController);
router.get("/random", getUserController);
router.post("/register", postUserController);

module.exports = router;
