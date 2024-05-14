const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/expensesValidation");
const auth = require("../middleware/auth");
const {
  getAllExpenses,
  postExpenses,
  updateExpenses,
  deleteExpenses,
} = require("../handler/index");
router.get("/", auth, getAllExpenses);
router.post("/create", auth, validate, postExpenses);
router.put("/update", auth, validate, updateExpenses);
router.delete("/delete", auth, validate, deleteExpenses);

module.exports = router;
