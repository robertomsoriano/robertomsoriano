require("dotenv").config();

var api_key = process.env.LLAVE;
var domain = process.env.DOMAIN;

var mailgun = require("mailgun-js")({
  apiKey: api_key,
  domain: domain
});

const sendMail = (email, subject, message, cb) => {
  const data = {
    from: email,
    to: "robertomsoriano@hotmail.com", // TODO: the receiver email has to be authorized for the free tier
    subject: subject,
    text: message
  };

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      return cb(error, null);
    }
    return cb(null, body);
  });
};

module.exports = sendMail;
