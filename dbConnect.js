require("dotenv").config();
const pg = require("pg");
const { Client } = pg;

const connectDB = () => {
  const client = new Client({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
  });

  client
    .connect()
    .then(() => console.log("Connected to Postgre"))
    .catch((err) => console.error("Error connecting to Postgre\n", err));
};
const db = connectDB();

module.exports = db;
