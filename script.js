const SOFTWARE_PASSWORD = "741223741223";

const lockScreen = document.getElementById("lockScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordError = document.getElementById("passwordError");

function unlockSoftware() {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === SOFTWARE_PASSWORD) {
    lockScreen.style.display = "none";

    passwordError.textContent = "";
    passwordInput.value = "";
  } else {
    passwordError.textContent = "Incorrect password. Please try again.";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

unlockBtn.addEventListener("click", unlockSoftware);

passwordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    unlockSoftware();
  }
});
