const express = require("express");
const app = require("./src/app");
const db = require("./dbConnect");
const port = Number(process.env.PORT || 5000);
//const postgresTimestamp = "2024-04-29 08:30:00";

//
app.listen(port, async () => {
  try {
    await db;
    // console.log(customTrim(date.toLocaleString()));

    console.log(`Listening at PORT ${port}`);
  } catch (e) {
    console.log(e);
  }
});
