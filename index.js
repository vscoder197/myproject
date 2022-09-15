const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("hey there");
});

app.listen(4000);
