const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, (req, res) => console.log(`app is listening on port ${PORT}`));
