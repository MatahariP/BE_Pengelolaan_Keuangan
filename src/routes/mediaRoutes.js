const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/mediaValidaton");
const auth = require("../middleware/auth");
const {
  getAllMedia,
  postMedia,
  updateMedia,
  deleteMedia,
} = require("../handler/index");
router.get("/", auth, getAllMedia);
router.post("/create", auth, validate, postMedia);
router.put("/update", auth, validate, updateMedia);
router.delete("/delete", auth, validate, deleteMedia);

module.exports = router;
