const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/inputValidation");
const auth = require("../middleware/auth");
const {
  getAllInput,
  postInput,
  updateInput,
  deleteInput,
} = require("../handler/index");
router.get("/", auth, getAllInput);
router.post("/create", auth, validate, postInput);
router.put("/update", auth, validate, updateInput);
router.delete("/delete", auth, validate, deleteInput);

module.exports = router;
