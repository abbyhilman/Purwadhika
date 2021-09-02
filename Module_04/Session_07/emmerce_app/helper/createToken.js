const jwt = require("jsonwebtoken");

module.exports = {
  createToken: (payload) => {
    return jwt.sign(payload, "emmerceApp", {
      expiresIn: "12h",
    });
  },
};
