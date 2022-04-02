const express = require("express");
const app = express();

app.use(express.json());

app.get(`/`, (req, res) => {
  return res.json({ message: "Hello app_2" });
});

app.listen(3003, () => {
  console.log(`Listening on port 3003`);
});
