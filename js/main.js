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
