const express = require("express");
const getUserController = require("../controllers/userController/getUserController");
const postUserController = require("../controllers/userController/postUserController");
const authMiddleware = require("../middlewares/authMiddleware");
const authController = require("../helpers/authController");
const loginController = require("../controllers/userController/loginController");
const router = express.Router();
router.get("/", getUserController);
router.get("/id/:id", getUserController);
router.get("/lastname/:lastname", getUserController);
router.get("/firstname/:firstname", getUserController);
router.get("/random", getUserController);
router.post("/register", postUserController);
//LOGIN || POST
router.post("/login", loginController);
//Auth || POST
router.post("/getuserdata", authMiddleware, authController);

module.exports = router;
