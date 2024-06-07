const express = require("express");
const router = require("./routes");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json({ type: "application/json" }));

app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
module.exports = app;
