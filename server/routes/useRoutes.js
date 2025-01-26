const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middelware/authMiddelware");
const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/").get(protect, allUsers);
module.exports = router;
