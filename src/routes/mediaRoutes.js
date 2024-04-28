const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/mediaValidaton");
const {
  getAllMedia,
  postMedia,
  updateMedia,
  deleteMedia,
} = require("../handler/media/index");
router.get("/", getAllMedia);
router.post("/create", validate, postMedia);
router.put("/update", validate, updateMedia);
router.delete("/delete", validate, deleteMedia);

module.exports = router;
