const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/categoryValidation");
const auth = require("../middleware/auth");

const {
  getAllCategory,
  postCategory,
  updateCategory,
  deleteCategory,
} = require("../handler/index");
router.get("/", auth, getAllCategory);
router.post("/create", auth, validate, postCategory);
router.put("/update", auth, validate, updateCategory);
router.delete("/delete", auth, validate, deleteCategory);

module.exports = router;
