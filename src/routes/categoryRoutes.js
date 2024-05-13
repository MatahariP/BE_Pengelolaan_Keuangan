const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/categoryValidation");
const {
  getAllCategory,
  postCategory,
  updateCategory,
  deleteCategory,
} = require("../handler/index");
router.get("/", getAllCategory);
router.post("/create", validate, postCategory);
router.put("/update", validate, updateCategory);
router.delete("/delete", validate, deleteCategory);

module.exports = router;
