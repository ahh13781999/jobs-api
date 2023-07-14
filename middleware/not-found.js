const notFound = (req, res) =>
  res.status(404).send("The route does not exsist");

module.exports = notFound;