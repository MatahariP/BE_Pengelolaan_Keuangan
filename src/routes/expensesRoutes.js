const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/expensesValidation");
const {
  getAllExpenses,
  postExpenses,
  updateExpenses,
  deleteExpenses,
} = require("../handler/expenses_name/index");
router.get("/", getAllExpenses);
router.post("/create", validate, postExpenses);
router.put("/update", validate, updateExpenses);
router.delete("/delete", validate, deleteExpenses);

module.exports = router;
