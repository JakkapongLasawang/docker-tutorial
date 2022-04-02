const express = require("express");
const app = express();

app.get(`/`, (req, res) => {
  return res.json({ message: "Hello app_1.10" });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
