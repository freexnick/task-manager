const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
require("dotenv").config();

const app = express();
app.use(express.static("./public"));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/tasks", tasks);
app.use(notFound);

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
