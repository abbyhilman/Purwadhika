const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abbyhilman@gmail.com",
    pass: "kvywjjalvgymxnsi",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
