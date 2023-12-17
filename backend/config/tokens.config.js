const jwt = require("jsonwebtoken");
const { SECRET } = require("./envs");

const generateToken = (payload, duration) => {
  const token = jwt.sign({ user: payload }, SECRET, {
    expiresIn: 400,
  });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

module.exports = { generateToken, validateToken };
