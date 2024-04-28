const db = require("../../../dbConnect");

const getAllMedia = async (req, res) => {
  const query = `SELECT * FROM media`;

  try {
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const postMedia = async (req, res) => {
  //console.log(req.body);
  const { id_media, name } = req.body;

  let query = `Select name FROM media WHERE name = '${name}'`;
  const check = await db.query(query);
  if (check.rows.length != 0)
    return res.status(400).send(`"${check.rows[0].name}" already added!`);

  query = `INSERT INTO media (id_media,name) VALUES ('${id_media}','${name}')`;

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

const updateMedia = async (req, res) => {
  const { id_media, name } = req.body;
  // console.log(id_media, name);
  let query = `Select id_media FROM media WHERE id_media = '${id_media}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_media}" doesn't exist!`);

  query = `UPDATE media SET name = '${name}' WHERE id_media = '${id_media}'`;
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

const deleteMedia = async (req, res) => {
  const { id_media } = req.body;
  let query = `Select id_media FROM media WHERE id_media = '${id_media}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_media}" doesn't exist!`);

  query = `DELETE FROM media WHERE id_media = '${id_media}'`;
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
  getAllMedia,
  postMedia,
  updateMedia,
  deleteMedia,
};
