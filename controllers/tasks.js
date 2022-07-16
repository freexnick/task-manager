const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.status(200).send("get all tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body).catch((err) =>
    res.status(500).json({ msg: err.message })
  );
  res.status(201).json({ task });
};
const getTask = (req, res) => {
  res.status(200).json({ id: req?.params?.id });
};
const updateTask = (req, res) => {
  res.status(200).send("update task");
};
const deleteTask = (req, res) => {
  res.status(200).send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
