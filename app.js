const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello azure");
});

app.listen(443, () => {
  console.log("listening on port 80");
});
