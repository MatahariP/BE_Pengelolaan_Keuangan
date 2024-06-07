const express = require("express");
const app = require("./src/app");
const db = require("./dbConnect");
const port = Number(process.env.PORT || 5000);
const notFound = require("./src/middleware/notFound");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//const postgresTimestamp = "2024-04-29 08:30:00";

app.use(notFound);
app.use(cookieParser(process.env.SECRET_KEY));
//
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, async () => {
  try {
    await db;
    // console.log(customTrim(date.toLocaleString()));

    console.log(`Listening at PORT ${port}`);
  } catch (e) {
    console.log(e);
  }
});
