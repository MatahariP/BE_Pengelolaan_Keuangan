const db = require("../../dbConnect");

const getAllUser = async (req, res) => {
  const query = `SELECT ui."timestamp",
  ui."date" ,
  ex."category",
  ex."name",
  ui."description",
  ui."nominal",
  ex."media",
  ui."id_management_types",
  ex."id_expenses"
FROM user_input AS ui
JOIN expenses AS ex ON ui."timestamp" = ex."timestamp";
`;

  //   `SELECT ui."timestamp",
  // ui."date" ,
  // inc."media",
  // inc."income_source",
  // ui."description",
  // ui."nominal",
  // ui."id_management_types"
  // FROM user_input AS ui
  // JOIN income AS inc ON ui."timestamp" = inc."timestamp";
  // `;

  //   `SELECT ui."timestamp",
  // ui."date" ,
  // tsc."transaction_type",
  // tsc."sender",
  // tsc."sender_media",
  // tsc."receiver_media",
  // ui."description",
  // ui."nominal",
  // ui."id_management_types"
  // FROM user_input AS ui
  // JOIN transaction AS tsc ON ui."timestamp" = tsc."timestamp";
  // `;

  try {
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const postUser = async (req, res) => {
  //console.log(req.body);
  const timestamp = new Date().getTime();
  const {
    date,
    category,
    name,
    description,
    nominal,
    media,
    id_management_types,
    id_expenses,
  } = req.body;
  timestamp;
  let query = `Select id_expenses FROM expenses WHERE id_expenses = '${id_expenses}'`;
  let check = await db.query(query);
  if (check.rows.length != 0)
    return res
      .status(400)
      .send(`"${check.rows[0].id_expenses}" already added!`);

  query = `Select timestamp FROM user_input WHERE timestamp = '${timestamp}'`;

  check = await db.query(query);
  if (check.rows.length != 0)
    return res.status(400).send(`"${check.rows[0].timestamp}" already added!`);

  query = `INSERT INTO user_input (timestamp, date, description, nominal, id_management_types) VALUES ('${timestamp}','${date}','${description}','${nominal}','${id_management_types}')`;
  // const query2 = `INSERT INTO expenses (timestamp, category, name, media) VALUES ('${timestamp}','${category}','${name}','${media}')`;

  try {
    await db.query(query);
    query = `INSERT INTO expenses (timestamp, category, name, media, id_expenses) VALUES ('${timestamp}','${category}','${name}','${media}','${id_expenses}')`;
    await db.query(query);
    res.status(200).send("Data Updated!!");
    // console.log(query);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const {
    timestamp,
    date,
    category,
    name,
    description,
    nominal,
    media,
    id_management_types,
    id_expenses,
  } = req.body;
  `SELECT ui."timestamp",
  ui."date" ,
  ex."category",
  ex."name",
  ui."description",
  ui."nominal",
  ex."media",
  ui."id_management_types",
  ex."id_expenses"
FROM user_input AS ui
JOIN expenses AS ex ON ui."timestamp" = ex."timestamp";
`;

  // console.log(id_source_income, name);
  let query = `Select id_expenses FROM expenses WHERE id_expenses = '${id_expenses}'`;
  let check = await db.query(query);
  if ((check.rows.length = 0))
    return res.status(400).send(`"${check.rows[0].id_expenses}" doesnt Exist!`);

  query = `Select timestamp FROM user_input WHERE timestamp = '${timestamp}'`;

  check = await db.query(query);
  if (check.rows.length == 0)
    return res.status(400).send(`"${check.rows[0].timestamp}" doesnt Exist!`);
  `SELECT ui."timestamp",
    ui."date" ,
    ex."category",
    ex."name",
    ui."description",
    ui."nominal",
    ex."media",
    ui."id_management_types",
    ex."id_expenses"
  FROM user_input AS ui
  JOIN expenses AS ex ON ui."timestamp" = ex."timestamp";
  `;

  // console.log(query);

  try {
    query = `UPDATE user_input SET date = '${date}', description = '${description}', nominal = '${nominal}', id_management_types = '${id_management_types}' WHERE timestamp = '${timestamp}'`;
    await db.query(query);
    query = `UPDATE expenses SET category = '${category}', name = '${name}', media = '${media}', id_expenses = '${id_expenses}' WHERE timestamp = '${timestamp}'`;
    await db.query(query);

    res.status(200).send("Data Updated!!");
    // console.log(query);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { timestamp, id_expenses } = req.body;
  let query = `Select id_expenses FROM expenses WHERE id_expenses = '${id_expenses}'`;
  let check = await db.query(query);
  if ((check.rows.length = 0))
    return res.status(400).send(`"${check.rows[0].id_expenses}" doesnt Exist!`);

  query = `Select timestamp FROM user_input WHERE timestamp = '${timestamp}'`;

  check = await db.query(query);
  if (check.rows.length == 0)
    return res.status(400).send(`"${check.rows[0].timestamp}" doesnt Exist!`);

  // console.log(query);

  try {
    query = `DELETE FROM expenses WHERE timestamp = '${timestamp}'`;

    await db.query(query);

    query = `DELETE FROM user_input WHERE timestamp = '${timestamp}'`;

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
  getAllUser,
  postUser,
  updateUser,
  deleteUser,
};
