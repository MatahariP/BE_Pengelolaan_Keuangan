const db = require("../../../dbConnect");

const getAllSource = async (req, res) => {
  const query = `SELECT * FROM source_income`;

  try {
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const postSource = async (req, res) => {
  //console.log(req.body);
  const { id_source_income, name } = req.body;

  let query = `Select name FROM source_income WHERE name = '${name}'`;
  const check = await db.query(query);
  if (check.rows.length != 0)
    return res.status(400).send(`"${check.rows[0].name}" already added!`);

  query = `INSERT INTO source_income (id_source_income,name) VALUES ('${id_source_income}','${name}')`;

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

const updateSource = async (req, res) => {
  const { id_source_income, name } = req.body;
  // console.log(id_source_income, name);
  let query = `Select id_source_income FROM source_income WHERE id_source_income = '${id_source_income}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_source_income}" doesn't exist!`);

  query = `UPDATE source_income SET name = '${name}' WHERE id_source_income = '${id_source_income}'`;
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

const deleteSource = async (req, res) => {
  const { id_source_income } = req.body;
  let query = `Select id_source_income FROM source_income WHERE id_source_income = '${id_source_income}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_source_income}" doesn't exist!`);

  query = `DELETE FROM source_income WHERE id_source_income = '${id_source_income}'`;
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
  getAllSource,
  postSource,
  updateSource,
  deleteSource,
};
