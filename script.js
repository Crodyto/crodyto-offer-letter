
const CORRECT_PASSWORD = "741223741223";

const lockForm = document.getElementById("lockForm");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error");

lockForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === CORRECT_PASSWORD) {

        // Password correct → redirect to Offer Letter page
        window.location.href = "offer-letter-page.html";

    } else {

        errorMessage.textContent =
            "Incorrect password. Please try again.";

        passwordInput.value = "";
        passwordInput.focus();

    }
});

window.addEventListener("load", function () {
    passwordInput.focus();
});

