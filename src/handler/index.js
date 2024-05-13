const categoryHandler = require("./categoryHandler");
const userHandler = require("./userHandler");
const sourceHandler = require("./sourceHandler");
const expensesHandler = require("./expensesHandler");
const mediaHandler = require("./mediaHandler");

module.exports = {
  ...categoryHandler,
  ...userHandler,
  ...sourceHandler,
  ...expensesHandler,
  ...mediaHandler,
};
