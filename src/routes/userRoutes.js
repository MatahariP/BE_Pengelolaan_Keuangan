const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/userValidation");
const { getAllUsers, login, register, logout } = require("../handler/index");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
router.get("/", auth, authAdmin, getAllUsers);
router.get("/login", validate, login);
router.get("/logout", logout);
router.post("/register", validate, register);
// router.delete("/delete", deleteExpenses);

module.exports = router;
