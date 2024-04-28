const express = require("express");
const router = express.Router();
const mediaRoutes = require("./mediaRoutes");
const categoryRoutes = require("./categoryRoutes");
const sourceRoutes = require("./sourceRoutes");
const expensesRoutes = require("./expensesRoutes");
router.use("/media", mediaRoutes);
router.use("/category", categoryRoutes);
router.use("/source", sourceRoutes);
router.use("/expenses_name", expensesRoutes);

module.exports = router;
