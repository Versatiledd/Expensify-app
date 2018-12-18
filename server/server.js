const path = require("path");
const express = require("express");
const app = express();
const dayPath = path.join(__dirname, "..", "Dzien");
const port = process.env.PORT || 3000;

app.use(express.static(dayPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(dayPath, "index.html"));
});

app.listen(port, () => {
  console.log("Słyszę i widzę. Startuje i pracuje");
});
