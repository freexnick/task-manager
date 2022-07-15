const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, (req, res) =>
      console.log(`app is listening on port ${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
