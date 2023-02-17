function toggleColorMode() {
  let navToggleColor = document.getElementById("toggle");
  let currentClass = navToggleColor.className;
  navToggleColor.className =
    currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
