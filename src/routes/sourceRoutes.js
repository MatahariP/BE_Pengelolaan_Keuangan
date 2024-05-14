const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/sourceValidation");
const auth = require("../middleware/auth");
const {
  getAllSource,
  postSource,
  updateSource,
  deleteSource,
} = require("../handler/index");
router.get("/", getAllSource);
router.post("/create", auth, validate, postSource);
router.put("/update", auth, updateSource);
router.delete("/delete", auth, validate, deleteSource);

module.exports = router;
