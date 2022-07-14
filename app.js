const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.listen(PORT, (req, res) => console.log(`app is listening on port ${PORT}`));
