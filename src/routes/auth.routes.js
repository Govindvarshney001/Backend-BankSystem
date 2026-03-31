const express = require("express");
const authController = require("../controllers/auth.controller");
const userModel = require("../models/user.model");
const userLoginController = require("../controllers/auth.controller");
const cookieParser = require("cookie-parser");

const router = express.Router();

/* POST /api/auth/register */
router.post("/register", authController.userRegisterController);

/* POST /api/auth/login */
router.post("/login", authController.userLoginController);

// /**
//  * - POST /api/auth/logout
//  */
router.post("/logout", authController.userLogoutController);

module.exports = router;
