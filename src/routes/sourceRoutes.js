const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/sourceValidation");
const {
  getAllSource,
  postSource,
  updateSource,
  deleteSource,
} = require("../handler/index");
router.get("/", getAllSource);
router.post("/create", validate, postSource);
router.put("/update", validate, updateSource);
router.delete("/delete", validate, deleteSource);

module.exports = router;
