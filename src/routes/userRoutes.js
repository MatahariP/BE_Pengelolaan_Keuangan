const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/userValidation");
const { getAllUsers, login, register } = require("../handler/index");
const auth = require("../middleware/auth");
router.get("/", auth, getAllUsers);
router.get("/login", validate, login);
router.post("/register", validate, register);
// router.delete("/delete", deleteExpenses);

module.exports = router;
