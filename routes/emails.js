var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

router.post('/requestform', jsonParser, function(req, res, next) {
  if (!req.body) {
    return res.sendStatus(400)
  }

  let transporter = nodemailer.createTransport({
    host: "colbyhemond.me", port: 465, secure: true, // true for 465, false for other ports
    auth: {
      user: 'contact@colbyhemond.me',
      pass: 'WM1hem12'
    }
  });

  var mailOptions = {
    from: 'contact@colbyhemond.me',
    to: 'hemond.colby@gmail.com',
    subject: 'New Request Submitted',
    text: `Name: ` + req.body.name + `\nEmail: ` + req.body.email + `\nPhone: ` + req.body.phone + `\nRequests:\n  ` + req.body.service1 + `\n  ` + req.body.service2 + `\n  ` + req.body.service3
  };

  let info = transporter.sendMail(mailOptions).catch(error => console.log(`Error sending email: ` + error));

  return res.sendStatus(200);
});

module.exports = router;
