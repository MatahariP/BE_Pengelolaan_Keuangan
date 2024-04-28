const express = require("express");
const app = require("./src/app");
const db = require("./dbConnect");
const port = Number(process.env.PORT || 5000);

app.listen(port, async () => {
  try {
    await db;
    console.log(`Listening at PORT ${port}`);
  } catch (e) {
    console.log(e);
  }
});
