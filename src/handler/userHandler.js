const db = require("../../dbConnect");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  const query = `SELECT * FROM users`;

  try {
    const { rows } = await db.query(query);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const register = async (req, res) => {
  //console.log(req.body);
  const { name, user_type, password, email } = req.body;

  let query = `Select name FROM users WHERE email = '${email}'`;
  let check = await db.query(query);
  if (check.rows.length != 0)
    return res.status(400).send(`Email already added!`);

  query = "Select id_user FROM users";
  // console.log("aAAAAA");

  check = await db.query(query);
  let checkId = 0;

  for (let i = 0; i < check.rows.length; i++) {
    let idSplit = check.rows[i].id_user.split("-");

    console.log(idSplit);
    if (parseInt(idSplit[1].trim()) > checkId) {
      checkId = parseInt(idSplit[1].trim());
    }
  }
  checkId++;
  const finalId = "user-" + checkId;
  let hashPass = await bcrypt.hash(password, 10);
  query = `INSERT INTO users (id_user,name, user_type, password, email) VALUES ('${finalId}','${name}', '${user_type}','${hashPass}','${email}')`;

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

const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(id_user, name);
  let query = `Select * FROM users WHERE email = '${email}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`Incorrect Email or Password`);

  // return res.status(400).send(`Incorrect Email or Password`);

  checkPass = await bcrypt.compare(password, check.rows[0].password);

  if (!checkPass) return res.status(400).send(`Incorrect Email or Password`);

  // console.log(query);

  try {
    const token = jwt.sign(
      { id: check.rows[0].id_user, type: check.rows[0].user_type },
      process.env.SECRET_KEY,
      {
        expiresIn: "6h",
      }
    );
    return res
      .cookie("token", token)
      .status(200)
      .json({
        message: `${check.rows[0].email} Berhasil masuk`,
        token,
      });
    res.status(200).send("Data Updated!!");
    // console.log(query);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const logout = async (req, res) => {
  if (req.user.id === "") {
    res.send("Failed to logout");
  }
  res.clearCookie("token").json({
    message: "Successfully logged out",
  });
};

const deleteUser = async (req, res) => {
  const { id_user } = req.body;
  let query = `Select id_user FROM users WHERE id_user = '${id_user}'`;
  // console.log(query);
  const check = await db.query(query);
  if (check.rows.length <= 0)
    return res.status(400).send(`id "${id_user}" doesn't exist!`);

  query = `DELETE FROM users WHERE id_user = '${id_user}'`;
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
  getAllUsers,
  register,
  login,
  logout,
  deleteUser,
};
