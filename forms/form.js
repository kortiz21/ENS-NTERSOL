//for express
const express = require('express');
const fs = require('fs');

//to parse request body
const app = express();
const bodyParser = require('body-parser');

//mailer
const nodemailer = require('nodemailer');

// middleware for form data parsing
app.use(bodyParser.urlencoded({ extended: true }));

//for css styling
app.use(express.static(__dirname))

//home page
app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");
});

app.post('/send_email', function(req, res) {
  // receive and store form data
  const templateFlag = req.body.templateFlag;
  const emailType = req.body.notify || req.body.news || req.body.request;
  const to = req.body.to;
  const cc = req.body.cc || '';
  const bcc = req.body.bcc || '';
  const subject = req.body.subject;
  const body = req.body.body;
  const file = req.file;

  // instantiate nodemailer
  let transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth:
    {
      user: 'awagyusteak@gmail.com',
      pass: 'wzk9tr1y5Iphm0xU'
    }
  });

  // set email options
  let mailOptions = {
    from: 'awagyusteak@gmail.com', // Replace with your Gmail address
    to: to,
    cc: cc,
    bcc: bcc,
    subject: subject,
    html: body
  };

  // attach file is provided
  if (file)
    {
        let fileContent = fs.readFileSync(file.path);
        mailOptions.attachments = [{
            filename: file.originalname,
            content: fileContent
        }];
    }
    
  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error)
    {
      console.error(error);
      res.status(500).send('Error sending email');
    }
    else
    {
      console.log('Email sent: ' + info.response);
      res.send('Email sent');
    }
  });
});

//listening
app.listen(3000, () => {
  console.log('listening on port 3000...');
});
