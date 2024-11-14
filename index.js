const themeSwitch = document.querySelector(".theme-switch");
themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";

themeSwitch.addEventListener("change", function (e) {
  if (e.currentTarget.checked === true) {
    localStorage.setItem("switchedTheme", "true");
  } else {
    localStorage.removeItem("switchedTheme");
  }
});
