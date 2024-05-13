const db = require("../../dbConnect");

const getAllExpenses = async (req, res) => {
  const query = `SELECT * FROM expenses_name`;

  try {
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const postExpenses = async (req, res) => {
  //console.log(req.body);
  const { id_expenses_name, name } = req.body;

  let query = `Select name FROM expenses_name WHERE name = '${name}'`;
  const check = await db.query(query);
  if (check.rows.length != 0)
    return res.status(400).send(`"${check.rows[0].name}" already added!`);

  query = `INSERT INTO expenses_name (id_expenses_name,name) VALUES ('${id_expenses_name}','${name}')`;

  try {
    await db.query(query);
    res.status(200).send("Data Updated!!");
    // console.log(query);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateExpenses = async (req, res) => {
  const { id_expenses_name, name } = req.body;
  // console.log(id_expenses_name, name);
  let query = `Select id_expenses_name FROM expenses_name WHERE id_expenses_name = '${id_expenses_name}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_expenses_name}" doesn't exist!`);

  query = `UPDATE expenses_name SET name = '${name}' WHERE id_expenses_name = '${id_expenses_name}'`;
  // console.log(query);

  try {
    await db.query(query);
    res.status(200).send("Data Updated!!");
    // console.log(query);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteExpenses = async (req, res) => {
  const { id_expenses_name } = req.body;
  let query = `Select id_expenses_name FROM expenses_name WHERE id_expenses_name = '${id_expenses_name}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_expenses_name}" doesn't exist!`);

  query = `DELETE FROM expenses_name WHERE id_expenses_name = '${id_expenses_name}'`;
  // console.log(query);

  try {
    await db.query(query);
    res.status(200).send("Data Updated!!");
    // console.log(query);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllExpenses,
  postExpenses,
  updateExpenses,
  deleteExpenses,
};
