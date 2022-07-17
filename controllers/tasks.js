const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updateTask = (req, res) => {
  res.status(200).send("update task");
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    res.status(200).send();
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
