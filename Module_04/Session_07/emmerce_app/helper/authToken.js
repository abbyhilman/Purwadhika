const jwt = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    jwt.verify(req.token, "emmerceApp", (err, decoded) => {
      if (err) {
        return res.status(401).send("User not authenticated");
      }
      req.user = decoded;

      next();
    });
  },
};
