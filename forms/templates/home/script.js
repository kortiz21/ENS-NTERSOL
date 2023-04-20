// get the link elements by id
const homeLink = document.getElementById("home");
const formsLink = document.getElementById("forms");
const emailLink = document.getElementById("email");
const accountLink = document.getElementById("account");

// add click event listeners to each link
homeLink.addEventListener("click", function() {
  window.location.href = "home.html";
});

formsLink.addEventListener("click", function() {
  window.location.href = "forms.html";
});

emailLink.addEventListener("click", function() {
  window.location.href = "email.html";
});

accountLink.addEventListener("click", function() {
  window.location.href = "account.html";
});