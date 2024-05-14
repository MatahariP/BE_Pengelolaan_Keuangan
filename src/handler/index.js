const categoryHandler = require("./categoryHandler");
const inputHandler = require("./inputHandler");
const sourceHandler = require("./sourceHandler");
const expensesHandler = require("./expensesHandler");
const mediaHandler = require("./mediaHandler");
const userHandler = require("./userHandler");
module.exports = {
  ...categoryHandler,
  ...inputHandler,
  ...sourceHandler,
  ...expensesHandler,
  ...mediaHandler,
  ...userHandler,
};
