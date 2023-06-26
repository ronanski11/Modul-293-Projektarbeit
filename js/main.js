document
  .getElementById("dropdown-toggle")
  .addEventListener("mouseover", function () {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "flex";
  });

document
  .getElementById("dropdown-toggle")
  .addEventListener("mouseout", function () {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "none";
  });
document
  .getElementById("dropdown-parent")
  .addEventListener("mouseover", function () {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "flex";
  });

document
  .getElementById("dropdown-parent")
  .addEventListener("mouseout", function () {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = "none";
  });

function formSubmit() {
  alert("Form successfully submitted!");
}
function kontaktSubmit() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var experience = document.getElementById("experience").value;

  var emailBody =
    "Vorname: " +
    firstname +
    "\n" +
    "Nachname: " +
    lastname +
    "\n" +
    "Nachricht: " +
    experience;

  var mailtoLink =
    "mailto:ronan.coughlan@bbzbl-it.ch?subject=Kontakt Formular&body=" +
    encodeURIComponent(emailBody);

  window.open(mailtoLink, "_blank");
}
