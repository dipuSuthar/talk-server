const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id },"dilip@111", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
