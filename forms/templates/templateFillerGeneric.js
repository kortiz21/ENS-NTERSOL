//use handlebars package to insert data to template
const handlebars = require('handlebars');

//for fs
const fs = require('fs');

//to load our template fiile
const templateHTML = fs.readFileSync('templateFileName', 'utf8');

//put it all together
const templateUsed = handlebars.compile(templateHTML);

//what will go in the template; list all your insertable variables here
const data =
{
    toWhom: to,
    fromWhome:'test',
    cc: ccWhom,
    bcc: bccWhom,
    //newsletter vars
    profile: profilePic,
    title: emailTitle,
    subTitle: emailSub,
    bodyText: body,
    bodyText1: body1,
    bodyText2: body2,
    bodyText3: body3,
    bodyText4: body4
}

//output HTML again
const outputHTML = templateUsed(data)

//push it, all done!
res.send(outputHTML);
