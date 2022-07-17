const notFound = (req, res) => res.status(404).send("Resource doesn't exist");

module.exports = notFound;
