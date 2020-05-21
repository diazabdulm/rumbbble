module.exports = ({ user }, response, next) =>
  user ? next() : response.status(404).send({ error: `You're not logged in` });
