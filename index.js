const foregroundInput = document.getElementById("foreground-color");
const foregroundText = document.getElementById("foreground-color-text");
foregroundText.textContent = foregroundInput.value;
foregroundInput.addEventListener("input", function (e) {
  console.log("setting foreground to: ", e.target.value);
  foregroundText.textContent = e.target.value;
  document.documentElement.style.setProperty("--foreground", e.target.value);
});
const backgroundInput = document.getElementById("background-color");
const backgroundText = document.getElementById("background-color-text");
backgroundText.textContent = backgroundInput.value;
backgroundInput.addEventListener("input", function (e) {
  console.log("setting background to: ", e.target.value);
  backgroundText.textContent = e.target.value;
  document.documentElement.style.setProperty("--background", e.target.value);
});
