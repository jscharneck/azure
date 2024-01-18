const express = require("express");

const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT | 3000;

// app.get("/", (req, res) => {
//   res.send("hello azure");
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
