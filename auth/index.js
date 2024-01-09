const jwt = require('jsonwebtoken');

function sign(data) {
  return jwt.sign(data, 'secrets');
}

module.exports = {
  sign,
}