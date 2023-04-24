var table = document.createElement('table');
var tr = document.createElement('tr');
var arrheader = ['ID', 'From', 'To', 'Subject', 'dateTime', 'emailBody'];
var array = [{
    ID: 0,
    From: 'test@test.com',
    To: 'receive@test.com',
    Subject: 'testtesttest',
    dateTime: 'April 20 2023 16:20',
    emailBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    var td6 = document.createElement('td');

    var text1 = document.createTextNode(array[i].ID);
    var text2 = document.createTextNode(array[i].From);
    var text3 = document.createTextNode(array[i].To);
    var text4 = document.createTextNode(array[i].Subject);
    var text5 = document.createTextNode(array[i].dateTime);
    var text6 = document.createTextNode(array[i].emailBody);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    td6.appendChild(text6);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    table.appendChild(tr);
}
table.setAttribute("border", "inset");
document.body.appendChild(table);
