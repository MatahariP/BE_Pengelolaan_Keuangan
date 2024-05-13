const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/userValidation");
const {
  getAllUser,
  postUser,
  updateUser,
  deleteUser,
} = require("../handler/index");
router.get("/", getAllUser);
router.post("/create", validate, postUser);
router.put("/update", validate, updateUser);
router.delete("/delete", validate, deleteUser);

module.exports = router;
