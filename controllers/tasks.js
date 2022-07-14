const getAllTasks = (req, res) => {
  res.status(200).send("all items");
};

module.exports = {
  getAllTasks,
};
