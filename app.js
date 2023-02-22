const theme = document.querySelector("#theme");
const toggle = document.querySelector("#toggle");

document.addEventListener("DOMContentLoaded", () => {
  setTheme();
});

// recuperar el mode del localStorage
const setTheme = () => {
  const modeState = localStorage.getItem("mode");
  if (modeState && modeState === "light-mode") {
    theme.className = modeState;
    toggle.checked = true;
  } else {
    theme.className = "dark-mode";
    toggle.checked = false;
  }
};

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    localStorage.setItem("mode", "light-mode");
    theme.className = "light-mode";
  } else {
    localStorage.setItem("mode", "dark-mode");
    theme.className = "dark-mode";
  }
});
