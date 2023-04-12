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
  const emailTemplate = req.body.templateOp;
  const fromPerson = req.body.fromE;
  const to = req.body.to;
  const ccWhom = req.body.cc || '';
  const bccWhom = req.body.bcc || '';
  const subject = req.body.subject;
  const body = req.body.body;
  const file = req.file;

    //use handlebars package to insert data to template
    const handlebars = require('handlebars');

    //for fs
    const fs = require('fs');

    //set selected template file name
    if (templateFlag == 'Notification')
    {
        fileName = '/Users/austinfp/Downloads/ENS-NTERSOL-main/forms/templates/notifcation/template_notifcation.html';
    }
    else if (templateFlag == 'Newsletter')
    {
        fileName = '/Users/austinfp/Downloads/ENS-NTERSOL-main/forms/templates/newsletter/template_news.html';
    }
    else if (templateFlag == 'Request')
    {
        fileName = 'templates/request/template_request.html';
    }
    else
    {
        fileName = '/Users/austinfp/Downloads/ENS-NTERSOL-main/forms/templates/template_basic.html';
    }
    
    const templateHTML = fs.readFileSync(fileName, 'utf8');

    //put it all together
    const templateUsed = handlebars.compile(templateHTML);

    //what will go in the template
    //this example uses the ffiields in the template_basic.html template
    const data =
    {
        toWhom: to,
        fromWhome: fromPerson,
        cc: ccWhom,
        bcc: bccWhom,
        bodyText: body,
        
        //for dylan
        profile: 'https://images.fineartamerica.com/images-medium-large-5/6-snowflake-kenneth-libbrechtscience-photo-library.jpg',
        title: to,
        subTitle: fromPerson,
        bodyText: body,
        bodyText1: body,
        bodyText2: body,
        bodyText3: body,
        bodyText4: body,
    }

    //output HTML again
    const outputHTML = templateUsed(data)

    //push it, all done!
    console.log(outputHTML)
    res.send(outputHTML);

});

//listening
app.listen(3000, () => {
  console.log('listening on port 3000...');
});
