```javascript
// ==========================================
// CRODYTO OFFER LETTER GENERATOR
// FULL FIXED JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // PASSWORD LOCK
    // ==========================================

    const SOFTWARE_PASSWORD = "741223741223";

    const lockScreen = document.getElementById("lockScreen");
    const passwordInput = document.getElementById("passwordInput");
    const unlockBtn = document.getElementById("unlockBtn");
    const passwordError = document.getElementById("passwordError");

    function unlockSoftware() {
        const enteredPassword = passwordInput.value.trim();

        if (enteredPassword === SOFTWARE_PASSWORD) {

            // Force hide lock screen
            lockScreen.style.display = "none";
            lockScreen.classList.add("hidden");

            passwordError.textContent = "";
            passwordInput.value = "";

        } else {

            passwordError.textContent = "Incorrect password. Try again!";
            passwordInput.value = "";
            passwordInput.focus();
        }
    }

    if (unlockBtn) {
        unlockBtn.addEventListener("click", unlockSoftware);
    }

    if (passwordInput) {
        passwordInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                unlockSoftware();
            }
        });
    }


    // ==========================================
    // ELEMENTS
    // ==========================================

    const paymentType = document.getElementById("paymentType");
    const salaryInput = document.getElementById("salary");

    const generateBtn = document.getElementById("generateBtn");
    const clearBtn = document.getElementById("clearBtn");
    const printBtn = document.getElementById("printBtn");

    const signatureUpload = document.getElementById("signatureUpload");

    let uploadedSignature = "";


    // ==========================================
    // HELPER FUNCTIONS
    // ==========================================

    function getValue(id, fallback = "—") {
        const element = document.getElementById(id);

        if (!element) return fallback;

        const value = element.value.trim();

        return value !== "" ? value : fallback;
    }


    function setText(id, value) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    }


    function formatDate(dateValue) {

        if (!dateValue) {
            return "—";
        }

        const date = new Date(dateValue + "T00:00:00");

        return date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    }


    function generateOfferId() {

        const year = new Date().getFullYear();

        const randomNumber = Math.floor(
            1000 + Math.random() * 9000
        );

        return `CRO-${year}-${randomNumber}`;
    }


    // ==========================================
    // PAID / UNPAID SYSTEM
    // ==========================================

    function updatePaymentField() {

        if (!paymentType || !salaryInput) return;

        if (paymentType.value === "Unpaid") {

            salaryInput.value = "";

            salaryInput.disabled = true;

            salaryInput.placeholder =
                "Not applicable for unpaid position";

        } else {

            salaryInput.disabled = false;

            salaryInput.placeholder =
                "₹10,000 per month";
        }
    }


    if (paymentType) {
        paymentType.addEventListener(
            "change",
            updatePaymentField
        );
    }


    // ==========================================
    // SIGNATURE UPLOAD
    // ==========================================

    if (signatureUpload) {

        signatureUpload.addEventListener(
            "change",
            (event) => {

                const file = event.target.files[0];

                if (!file) return;

                const reader = new FileReader();

                reader.onload = (e) => {

                    uploadedSignature = e.target.result;

                    const signaturePreview =
                        document.getElementById(
                            "signaturePreview"
                        );

                    if (signaturePreview) {

                        signaturePreview.src =
                            uploadedSignature;

                        signaturePreview.style.display =
                            "block";
                    }
                };

                reader.readAsDataURL(file);
            }
        );
    }


    // ==========================================
    // GENERATE OFFER LETTER
    // ==========================================

    function generateLetter() {

        // Candidate

        const name =
            getValue("name", "Candidate");


        // Job

        const position =
            getValue("position");

        const department =
            getValue("department");

        const employmentType =
            getValue("employmentType");


        // Payment

        const payment =
            getValue("paymentType");

        const salary =
            getValue("salary");


        // Dates

        const joiningDateElement =
            document.getElementById("joiningDate");

        const offerDateElement =
            document.getElementById("offerDate");

        const validUntilElement =
            document.getElementById("validUntil");


        const joiningDate =
            joiningDateElement
                ? joiningDateElement.value
                : "";

        const offerDate =
            offerDateElement
                ? offerDateElement.value
                : "";

        const validUntil =
            validUntilElement
                ? validUntilElement.value
                : "";


        // Other details

        const duration =
            getValue("duration");

        const workMode =
            getValue("workMode");

        const location =
            getValue("location");

        const workingHours =
            getValue("workingHours");

        const workingDays =
            getValue("workingDays");

        const reportingManager =
            getValue("reportingManager");

        const noticePeriod =
            getValue("noticePeriod");

        const customTerms =
            getValue(
                "customTerms",
                "No additional terms have been specified."
            );

        const hrName =
            getValue(
                "hrName",
                "Authorized Person"
            );

        const hrDesignation =
            getValue(
                "hrDesignation",
                "HR / Authorized Representative"
            );


        // ======================================
        // OFFER ID
        // ======================================

        setText(
            "offerId",
            generateOfferId()
        );


        // ======================================
        // CANDIDATE PREVIEW
        // ======================================

        setText(
            "previewName",
            name
        );

        setText(
            "candidateNameSignature",
            name
        );


        // ======================================
        // POSITION PREVIEW
        // ======================================

        setText(
            "previewPosition",
            position
        );

        setText(
            "previewDepartment",
            department
        );

        setText(
            "previewEmploymentType",
            employmentType
        );


        // ======================================
        // SUMMARY
        // ======================================

        setText(
            "summaryPosition",
            position
        );

        setText(
            "summaryEmployment",
            employmentType
        );

        setText(
            "summaryDepartment",
            department
        );


        // ======================================
        // PAYMENT LOGIC
        // ======================================

        let compensationText = "";

        if (payment === "Unpaid") {

            compensationText =
                "Unpaid Position";

            setText(
                "paymentParagraph",
                "This is an unpaid position. No salary or stipend will be provided for this role unless otherwise agreed in writing by Crodyto."
            );

        } else {

            compensationText =
                salary !== "—"
                    ? salary
                    : "As per company policy";

            setText(
                "paymentParagraph",
                `This is a paid ${employmentType} position. The agreed salary or stipend is ${compensationText}, subject to company policies and applicable terms.`
            );
        }

        setText(
            "summarySalary",
            compensationText
        );


        // ======================================
        // JOINING DATE
        // ======================================

        const formattedJoiningDate =
            formatDate(joiningDate);

        setText(
            "summaryJoining",
            formattedJoiningDate
        );

        setText(
            "textJoiningDate",
            formattedJoiningDate
        );


        // ======================================
        // DURATION
        // ======================================

        setText(
            "summaryDuration",
            duration
        );


        // ======================================
        // EMPLOYMENT TYPE
        // ======================================

        setText(
            "textEmploymentType",
            employmentType
        );


        // ======================================
        // REPORTING MANAGER
        // ======================================

        setText(
            "previewReportingManager",
            reportingManager
        );


        // ======================================
        // WORK DETAILS
        // ======================================

        setText(
            "detailWorkMode",
            workMode
        );

        setText(
            "detailLocation",
            location
        );

        setText(
            "detailWorkingHours",
            workingHours
        );

        setText(
            "detailWorkingDays",
            workingDays
        );


        // ======================================
        // NOTICE PERIOD
        // ======================================

        setText(
            "detailNoticePeriod",
            noticePeriod
        );

        setText(
            "previewNoticePeriod",
            noticePeriod
        );


        // ======================================
        // CUSTOM TERMS
        // ======================================

        setText(
            "previewCustomTerms",
            customTerms
        );


        // ======================================
        // HR DETAILS
        // ======================================

        setText(
            "previewHrName",
            hrName
        );

        setText(
            "previewHrDesignation",
            hrDesignation
        );


        // ======================================
        // DATES
        // ======================================

        const formattedOfferDate =
            formatDate(offerDate);

        const formattedValidUntil =
            formatDate(validUntil);

        setText(
            "previewOfferDate",
            formattedOfferDate
        );

        setText(
            "letterDate",
            formattedOfferDate
        );

        setText(
            "previewValidUntil",
            formattedValidUntil
        );


        // Save automatically
        saveData();

        alert(
            "Offer Letter Generated Successfully!"
        );
    }


    // ==========================================
    // SAVE FORM DATA
    // ==========================================

    function saveData() {

        const elements =
            document.querySelectorAll(
                ".form-panel input:not([type='file']), .form-panel select, .form-panel textarea"
            );

        const data = {};

        elements.forEach((element) => {

            if (element.id) {
                data[element.id] =
                    element.value;
            }

        });

        data.signature =
            uploadedSignature;


        localStorage.setItem(
            "crodytoOfferLetterData",
            JSON.stringify(data)
        );
    }


    // ==========================================
    // LOAD SAVED DATA
    // ==========================================

    function loadData() {

        const saved =
            localStorage.getItem(
                "crodytoOfferLetterData"
            );

        if (!saved) return;


        try {

            const data =
                JSON.parse(saved);


            Object.keys(data).forEach(
                (key) => {

                    if (key === "signature") return;

                    const element =
                        document.getElementById(key);

                    if (element) {
                        element.value =
                            data[key];
                    }

                }
            );


            if (data.signature) {

                uploadedSignature =
                    data.signature;

                const signaturePreview =
                    document.getElementById(
                        "signaturePreview"
                    );

                if (signaturePreview) {

                    signaturePreview.src =
                        uploadedSignature;

                    signaturePreview.style.display =
                        "block";
                }
            }

        } catch (error) {

            console.error(
                "Could not load saved data:",
                error
            );
        }
    }


    // ==========================================
    // CLEAR FORM
    // ==========================================

    function clearForm() {

        const confirmed =
            confirm(
                "Are you sure you want to clear all information?"
            );

        if (!confirmed) return;


        const allInputs =
            document.querySelectorAll(
                ".form-panel input:not([type='file']), .form-panel textarea"
            );


        allInputs.forEach((input) => {
            input.value = "";
        });


        if (paymentType) {
            paymentType.value = "Paid";
        }

        const employmentType =
            document.getElementById(
                "employmentType"
            );

        if (employmentType) {
            employmentType.value =
                "Internship";
        }


        const workMode =
            document.getElementById(
                "workMode"
            );

        if (workMode) {
            workMode.value =
                "Remote";
        }


        if (signatureUpload) {
            signatureUpload.value = "";
        }

        uploadedSignature = "";


        const signaturePreview =
            document.getElementById(
                "signaturePreview"
            );

        if (signaturePreview) {

            signaturePreview.src = "";

            signaturePreview.style.display =
                "none";
        }


        localStorage.removeItem(
            "crodytoOfferLetterData"
        );


        updatePaymentField();


        alert(
            "All form data has been cleared."
        );
    }


    // ==========================================
    // BUTTON EVENTS
    // ==========================================

    if (generateBtn) {
        generateBtn.addEventListener(
            "click",
            generateLetter
        );
    }


    if (clearBtn) {
        clearBtn.addEventListener(
            "click",
            clearForm
        );
    }


    if (printBtn) {
        printBtn.addEventListener(
            "click",
            () => {
                window.print();
            }
        );
    }


    // ==========================================
    // INITIAL SETUP
    // ==========================================

    loadData();

    updatePaymentField();


    const offerDate =
        document.getElementById(
            "offerDate"
        );

    if (
        offerDate &&
        !offerDate.value
    ) {

        const today =
            new Date()
                .toISOString()
                .split("T")[0];

        offerDate.value =
            today;
    }


    // Focus password input

    if (passwordInput) {
        passwordInput.focus();
    }

});
```
