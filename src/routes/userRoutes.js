const express = require("express");
const router = express.Router();
const validate = require("../middleware/validation/userValidation");
const {} = require("../handler/user_input/index");
router.get("/");
router.post("/create", validate);
router.put("/update", validate);
router.delete("/delete", validate);

module.exports = router;
