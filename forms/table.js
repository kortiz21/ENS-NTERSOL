var table = document.createElement('table');
var tr = document.createElement('tr');
var arrheader = ['ID', 'From', 'To', 'Subject', 'Email Body'];
var array = [{
    ID: emailID,
    From: sender,
    To: receiver,
    Subject: subject,
    emailBody: body
}];
for (var j = 0; j < arrheader.length; j++) {
    var th = document.createElement('th'); //column
    var text = document.createTextNode(arrheader[j]); //cell
    th.appendChild(text);
    tr.appendChild(th);
}
table.appendChild(tr);

for (var i = 0; i < array.length; i++) {
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    var text1 = document.createTextNode(array[i].ID);
    var text2 = document.createTextNode(array[i].From);
    var text3 = document.createTextNode(array[i].To);
    var text4 = document.createTextNode(array[i].Subject);
    var text5 = document.createTextNode(array[i].emailBody);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
}
table.setAttribute("border", "inset");

var tableDiv = document.getElementById("tableHere");
tableDiv.appendChild(table);
