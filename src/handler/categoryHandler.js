const db = require("../../dbConnect");

const getAllCategory = async (req, res) => {
  const query = `SELECT * FROM category`;

  try {
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const postCategory = async (req, res) => {
  //console.log(req.body);
  const { id_category, name } = req.body;

  let query = `Select name FROM category WHERE name = '${name}'`;
  const check = await db.query(query);
  if (check.rows.length != 0)
    res.status(400).send(`"${check.rows[0].name}" already added!`);

  query = `INSERT INTO category (id_category,name) VALUES ('${id_category}','${name}')`;

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

const updateCategory = async (req, res) => {
  const { id_category, name } = req.body;
  // console.log(id_category, name);
  let query = `Select id_category FROM category WHERE id_category = '${id_category}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_category}" doesn't exist!`);

  query = `UPDATE category SET name = '${name}' WHERE id_category = '${id_category}'`;
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

const deleteCategory = async (req, res) => {
  const { id_category } = req.bo;
  let query = `Select id_category FROM category WHERE id_category = '${id_category}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_category}" doesn't exist!`);

  query = `DELETE FROM category WHERE id_category = '${id_category}'`;
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
  getAllCategory,
  postCategory,
  updateCategory,
  deleteCategory,
};
