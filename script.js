const CORRECT_PASSWORD = "741223741223";
const NEXT_PAGE = "offer_letter_page.html";

document.addEventListener("DOMContentLoaded", function () {

    const lockForm = document.getElementById("lockForm");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error");

    if (!lockForm || !passwordInput || !errorMessage) {
        alert("Lock page error: Required elements are missing.");
        return;
    }

    lockForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === CORRECT_PASSWORD) {

            errorMessage.textContent = "Access granted...";

            window.location.replace(NEXT_PAGE);

        } else {

            errorMessage.textContent =
                "Incorrect password. Please try again.";

            passwordInput.value = "";

            passwordInput.focus();
        }

    });

    passwordInput.focus();

});

