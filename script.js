// ==========================================
// CRODYTO OFFER LETTER GENERATOR
// ==========================================


let uploadedSignature = "";


// ==========================================
// ELEMENTS
// ==========================================

const paymentType =
  document.getElementById("paymentType");

const salaryInput =
  document.getElementById("salary");

const generateBtn =
  document.getElementById("generateBtn");

const clearBtn =
  document.getElementById("clearBtn");

const printBtn =
  document.getElementById("printBtn");

const signatureUpload =
  document.getElementById("signatureUpload");


// ==========================================
// GENERATE OFFER ID
// ==========================================

function generateOfferId() {

  const year =
    new Date().getFullYear();

  const random =
    Math.floor(
      1000 + Math.random() * 9000
    );

  return `CRO-${year}-${random}`;

}


// ==========================================
// FORMAT DATE
// ==========================================

function formatDate(value) {

  if (!value) {
    return "—";
  }

  const date =
    new Date(value + "T00:00:00");

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

}


// ==========================================
// GET VALUE
// ==========================================

function getValue(id, fallback = "—") {

  const element =
    document.getElementById(id);

  if (!element) {
    return fallback;
  }

  return element.value.trim() || fallback;

}


// ==========================================
// SET TEXT
// ==========================================

function setText(id, value) {

  const element =
    document.getElementById(id);

  if (element) {
    element.textContent = value;
  }

}


// ==========================================
// PAID / UNPAID TOGGLE
// ==========================================

function toggleSalaryField() {

  if (paymentType.value === "Unpaid") {

    salaryInput.value = "";

    salaryInput.disabled = true;

    salaryInput.placeholder =
      "Not applicable for unpaid role";

  } else {

    salaryInput.disabled = false;

    salaryInput.placeholder =
      "₹10,000 per month";

  }

}


// Run when Payment Type changes

paymentType.addEventListener(
  "change",
  function () {

    toggleSalaryField();

  }
);


// ==========================================
// GENERATE LETTER
// ==========================================

function generateLetter() {

  const name =
    getValue("name", "Candidate");

  const position =
    getValue("position");

  const department =
    getValue("department");

  const employmentType =
    getValue("employmentType");

  const payment =
    getValue("paymentType");

  const salary =
    getValue("salary");

  const joiningDate =
    document.getElementById(
      "joiningDate"
    ).value;

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

  const offerDate =
    document.getElementById(
      "offerDate"
    ).value;

  const validUntil =
    document.getElementById(
      "validUntil"
    ).value;

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

  const customTerms =
    getValue(
      "customTerms",
      "No additional terms have been specified."
    );


  // ------------------------------------------
  // OFFER ID
  // ------------------------------------------

  setText(
    "offerId",
    generateOfferId()
  );


  // ------------------------------------------
  // CANDIDATE
  // ------------------------------------------

  setText(
    "previewName",
    name
  );

  setText(
    "candidateNameSignature",
    name
  );


  // ------------------------------------------
  // JOB DETAILS
  // ------------------------------------------

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


  // ------------------------------------------
  // SUMMARY
  // ------------------------------------------

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


  // ------------------------------------------
  // PAID / UNPAID COMPENSATION
  // ------------------------------------------

  let compensationText;

  if (payment === "Unpaid") {

    compensationText =
      "Unpaid Internship / Engagement";

    setText(
      "paymentParagraph",
      "This is an unpaid engagement. No salary or stipend will be provided for this position unless otherwise agreed by Crodyto in writing."
    );

  } else {

    compensationText =
      salary !== "—"
        ? salary
        : "As per company policy";


    setText(
      "paymentParagraph",
      `This is a paid ${employmentType.toLowerCase()} position. The agreed salary or stipend for this role is ${compensationText}, subject to applicable company policies and agreed terms.`
    );

  }


  setText(
    "summarySalary",
    compensationText
  );


  // ------------------------------------------
  // JOINING DATE
  // ------------------------------------------

  setText(
    "summaryJoining",
    formatDate(joiningDate)
  );

  setText(
    "textJoiningDate",
    formatDate(joiningDate)
  );


  // ------------------------------------------
  // DURATION
  // ------------------------------------------

  setText(
    "summaryDuration",
    duration
  );


  // ------------------------------------------
  // EMPLOYMENT TYPE
  // ------------------------------------------

  setText(
    "textEmploymentType",
    employmentType
  );


  // ------------------------------------------
  // REPORTING MANAGER
  // ------------------------------------------

  setText(
    "previewReportingManager",
    reportingManager
  );


  // ------------------------------------------
  // WORK DETAILS
  // ------------------------------------------

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

  setText(
    "detailNoticePeriod",
    noticePeriod
  );


  // ------------------------------------------
  // NOTICE PERIOD
  // ------------------------------------------

  setText(
    "previewNoticePeriod",
    noticePeriod
  );


  // ------------------------------------------
  // CUSTOM TERMS
  // ------------------------------------------

  setText(
    "previewCustomTerms",
    customTerms
  );


  // ------------------------------------------
  // HR DETAILS
  // ------------------------------------------

  setText(
    "previewHrName",
    hrName
  );

  setText(
    "previewHrDesignation",
    hrDesignation
  );


  // ------------------------------------------
  // DATES
  // ------------------------------------------

  setText(
    "previewOfferDate",
    formatDate(offerDate)
  );

  setText(
    "letterDate",
    formatDate(offerDate)
  );

  setText(
    "previewValidUntil",
    formatDate(validUntil)
  );


  // ------------------------------------------
  // SAVE DATA
  // ------------------------------------------

  saveData();


  alert(
    "Offer Letter Generated Successfully!"
  );

}


// ==========================================
// HR SIGNATURE UPLOAD
// ==========================================

signatureUpload.addEventListener(
  "change",
  function (event) {

    const file =
      event.target.files[0];

    if (!file) {
      return;
    }

    const reader =
      new FileReader();

    reader.onload =
      function (e) {

        uploadedSignature =
          e.target.result;

        const preview =
          document.getElementById(
            "signaturePreview"
          );

        preview.src =
          uploadedSignature;

        preview.style.display =
          "block";

      };

    reader.readAsDataURL(file);

  }
);


// ==========================================
// SAVE DATA
// ==========================================

function saveData() {

  const data = {

    name:
      document.getElementById(
        "name"
      ).value,

    email:
      document.getElementById(
        "email"
      ).value,

    phone:
      document.getElementById(
        "phone"
      ).value,

    offerDate:
      document.getElementById(
        "offerDate"
      ).value,

    position:
      document.getElementById(
        "position"
      ).value,

    department:
      document.getElementById(
        "department"
      ).value,

    employmentType:
      document.getElementById(
        "employmentType"
      ).value,

    paymentType:
      document.getElementById(
        "paymentType"
      ).value,

    salary:
      document.getElementById(
        "salary"
      ).value,

    joiningDate:
      document.getElementById(
        "joiningDate"
      ).value,

    duration:
      document.getElementById(
        "duration"
      ).value,

    workMode:
      document.getElementById(
        "workMode"
      ).value,

    location:
      document.getElementById(
        "location"
      ).value,

    workingHours:
      document.getElementById(
        "workingHours"
      ).value,

    workingDays:
      document.getElementById(
        "workingDays"
      ).value,

    reportingManager:
      document.getElementById(
        "reportingManager"
      ).value,

    noticePeriod:
      document.getElementById(
        "noticePeriod"
      ).value,

    validUntil:
      document.getElementById(
        "validUntil"
      ).value,

    customTerms:
      document.getElementById(
        "customTerms"
      ).value,

    hrName:
      document.getElementById(
        "hrName"
      ).value,

    hrDesignation:
      document.getElementById(
        "hrDesignation"
      ).value,

    signature:
      uploadedSignature

  };


  localStorage.setItem(
    "crodytoOfferLetterData",
    JSON.stringify(data)
  );

}


// ==========================================
// LOAD SAVED DATA
// ==========================================

function loadSavedData() {

  const savedData =
    localStorage.getItem(
      "crodytoOfferLetterData"
    );

  if (!savedData) {
    return;
  }


  const data =
    JSON.parse(savedData);


  Object.keys(data).forEach(
    function (key) {

      const element =
        document.getElementById(key);

      if (
        element &&
        key !== "signature"
      ) {

        element.value =
          data[key];

      }

    }
  );


  if (data.signature) {

    uploadedSignature =
      data.signature;

    const preview =
      document.getElementById(
        "signaturePreview"
      );

    preview.src =
      uploadedSignature;

    preview.style.display =
      "block";

  }


  toggleSalaryField();

  generateLetter();

}


// ==========================================
// CLEAR FORM
// ==========================================

function clearForm() {

  const inputs =
    document.querySelectorAll(
      "input:not([type='file']), textarea"
    );


  inputs.forEach(
    function (input) {

      input.value = "";

    }
  );


  document.getElementById(
    "employmentType"
  ).value =
    "Internship";


  document.getElementById(
    "paymentType"
  ).value =
    "Paid";


  document.getElementById(
    "workMode"
  ).value =
    "Remote";


  signatureUpload.value = "";

  uploadedSignature = "";


  const signaturePreview =
    document.getElementById(
      "signaturePreview"
    );

  signaturePreview.src = "";

  signaturePreview.style.display =
    "none";


  localStorage.removeItem(
    "crodytoOfferLetterData"
  );


  toggleSalaryField();

  generateLetter();

}


// ==========================================
// BUTTON EVENTS
// ==========================================

generateBtn.addEventListener(
  "click",
  generateLetter
);


clearBtn.addEventListener(
  "click",
  clearForm
);


printBtn.addEventListener(
  "click",
  function () {

    window.print();

  }
);


// ==========================================
// INITIALIZATION
// ==========================================

window.addEventListener(
  "DOMContentLoaded",
  function () {

    const today =
      new Date()
        .toISOString()
        .split("T")[0];


    // Set today's date

    document.getElementById(
      "offerDate"
    ).value = today;


    // Setup Paid / Unpaid field

    toggleSalaryField();


    // Load previous data

    loadSavedData();

  }
);


/* ================================
   CRODYTO SECURITY LOCK
================================ */

(function () {

    const CORRECT_PASSWORD = "741223741223";

    function setupCrodytoLock() {

        const lockScreen =
            document.getElementById("crodytoLockScreen");

        const passwordInput =
            document.getElementById("crodytoPassword");

        const unlockButton =
            document.getElementById("crodytoUnlockBtn");

        const errorMessage =
            document.getElementById("crodytoLockError");

        if (
            !lockScreen ||
            !passwordInput ||
            !unlockButton ||
            !errorMessage
        ) {
            console.error(
                "Crodyto lock elements not found."
            );
            return;
        }

        function unlock() {

            const enteredPassword =
                passwordInput.value.trim();

            if (
                enteredPassword === CORRECT_PASSWORD
            ) {

                // পুরো lock screen DOM থেকে remove
                lockScreen.remove();

            } else {

                errorMessage.textContent =
                    "Incorrect password. Please try again.";

                passwordInput.value = "";

                passwordInput.focus();

            }
        }

        unlockButton.addEventListener(
            "click",
            unlock
        );

        passwordInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    unlock();

                }

            }
        );

        passwordInput.focus();
    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            setupCrodytoLock
        );

    } else {

        setupCrodytoLock();

    }

})();
