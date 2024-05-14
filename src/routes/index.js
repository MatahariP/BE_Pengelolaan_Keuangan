const express = require("express");
const router = express.Router();
const mediaRoutes = require("./mediaRoutes");
const categoryRoutes = require("./categoryRoutes");
const sourceRoutes = require("./sourceRoutes");
const expensesRoutes = require("./expensesRoutes");
const inputRoutes = require("./inputRoutes");
const userRoutes = require("./userRoutes");
router.use("/media", mediaRoutes);
router.use("/category", categoryRoutes);
router.use("/source", sourceRoutes);
router.use("/expenses_name", expensesRoutes);
router.use("/input", inputRoutes);
router.use("/user", userRoutes);

module.exports = router;
