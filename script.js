document.addEventListener("DOMContentLoaded", function () {

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

      lockScreen.classList.add("hidden");

      passwordError.textContent = "";

      passwordInput.value = "";

    } else {

      passwordError.textContent =
        "Incorrect password. Please try again.";

      passwordInput.value = "";

      passwordInput.focus();
    }
  }


  unlockBtn.addEventListener("click", unlockSoftware);


  passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
      unlockSoftware();
    }

  });


  // ==========================================
  // APP ELEMENTS
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

  function generateOfferId() {

    const year = new Date().getFullYear();

    const random = Math.floor(
      1000 + Math.random() * 9000
    );

    return `CRO-${year}-${random}`;
  }


  function formatDate(value) {

    if (!value) {
      return "—";
    }

    const date = new Date(value + "T00:00:00");

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );
  }


  function getValue(id, fallback = "—") {

    const element = document.getElementById(id);

    if (!element) {
      return fallback;
    }

    return element.value.trim() || fallback;
  }


  function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
      element.textContent = value;
    }
  }


  // ==========================================
  // PAID / UNPAID
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


  paymentType.addEventListener(
    "change",
    toggleSalaryField
  );


  // ==========================================
  // SIGNATURE UPLOAD
  // ==========================================

  signatureUpload.addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

      uploadedSignature = e.target.result;

      const preview =
        document.getElementById("signaturePreview");

      preview.src = uploadedSignature;

      preview.style.display = "block";
    };

    reader.readAsDataURL(file);
  });


  // ==========================================
  // GENERATE LETTER
  // ==========================================

  function generateLetter() {

    const name = getValue("name", "Candidate");
    const position = getValue("position");
    const department = getValue("department");
    const employmentType = getValue("employmentType");
    const payment = getValue("paymentType");
    const salary = getValue("salary");

    const joiningDate =
      document.getElementById("joiningDate").value;

    const offerDate =
      document.getElementById("offerDate").value;

    const validUntil =
      document.getElementById("validUntil").value;

    const duration = getValue("duration");

    const workMode = getValue("workMode");
    const location = getValue("location");
    const workingHours = getValue("workingHours");
    const workingDays = getValue("workingDays");

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


    // OFFER ID

    setText(
      "offerId",
      generateOfferId()
    );


    // CANDIDATE

    setText("previewName", name);

    setText(
      "candidateNameSignature",
      name
    );


    // JOB

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


    // SUMMARY

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


    // PAYMENT

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


    // JOINING

    setText(
      "summaryJoining",
      formatDate(joiningDate)
    );

    setText(
      "textJoiningDate",
      formatDate(joiningDate)
    );


    // DURATION

    setText(
      "summaryDuration",
      duration
    );


    // EMPLOYMENT TYPE

    setText(
      "textEmploymentType",
      employmentType
    );


    // REPORTING

    setText(
      "previewReportingManager",
      reportingManager
    );


    // WORK DETAILS

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


    // NOTICE

    setText(
      "detailNoticePeriod",
      noticePeriod
    );

    setText(
      "previewNoticePeriod",
      noticePeriod
    );


    // TERMS

    setText(
      "previewCustomTerms",
      customTerms
    );


    // HR

    setText(
      "previewHrName",
      hrName
    );

    setText(
      "previewHrDesignation",
      hrDesignation
    );


    // DATES

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


    saveData();

    alert(
      "Offer Letter Generated Successfully!"
    );
  }


  // ==========================================
  // SAVE DATA
  // ==========================================

  function saveData() {

    const formElements =
      document.querySelectorAll(
        ".form-panel input:not([type='file']), .form-panel select, .form-panel textarea"
      );

    const data = {};

    formElements.forEach(function (element) {

      if (element.id) {
        data[element.id] = element.value;
      }

    });

    data.signature = uploadedSignature;

    localStorage.setItem(
      "crodytoOfferLetterData",
      JSON.stringify(data)
    );
  }


  // ==========================================
  // LOAD DATA
  // ==========================================

  function loadSavedData() {

    const savedData =
      localStorage.getItem(
        "crodytoOfferLetterData"
      );

    if (!savedData) return;

    try {

      const data = JSON.parse(savedData);

      Object.keys(data).forEach(function (key) {

        const element =
          document.getElementById(key);

        if (element && key !== "signature") {
          element.value = data[key];
        }

      });


      if (data.signature) {

        uploadedSignature = data.signature;

        const preview =
          document.getElementById(
            "signaturePreview"
          );

        preview.src = uploadedSignature;

        preview.style.display = "block";
      }

    } catch (error) {

      console.log(
        "Saved data could not be loaded."
      );

    }
  }


  // ==========================================
  // CLEAR FORM
  // ==========================================

  function clearForm() {

    const confirmed = confirm(
      "Are you sure you want to clear all data?"
    );

    if (!confirmed) return;


    const form =
      document.querySelector(".form-panel");

    const inputs =
      form.querySelectorAll(
        "input:not([type='file']), textarea"
      );

    inputs.forEach(function (input) {
      input.value = "";
    });


    document.getElementById(
      "employmentType"
    ).value = "Internship";

    document.getElementById(
      "paymentType"
    ).value = "Paid";

    document.getElementById(
      "workMode"
    ).value = "Remote";


    signatureUpload.value = "";

    uploadedSignature = "";


    const signaturePreview =
      document.getElementById(
        "signaturePreview"
      );

    signaturePreview.src = "";

    signaturePreview.style.display = "none";


    localStorage.removeItem(
      "crodytoOfferLetterData"
    );


    toggleSalaryField();


    // Reset page preview

    setText("offerId", "CRO-0000");
    setText("previewOfferDate", "—");
    setText("letterDate", "—");
    setText("previewName", "Candidate");
    setText("previewPosition", "—");
    setText("previewDepartment", "—");
    setText("previewEmploymentType", "—");
    setText("summaryPosition", "—");
    setText("summaryEmployment", "—");
    setText("summaryDepartment", "—");
    setText("summarySalary", "—");
    setText("summaryJoining", "—");
    setText("summaryDuration", "—");
    setText("textJoiningDate", "—");
    setText("textEmploymentType", "—");
    setText("previewReportingManager", "—");
    setText("detailWorkMode", "—");
    setText("detailLocation", "—");
    setText("detailWorkingHours", "—");
    setText("detailWorkingDays", "—");
    setText("detailNoticePeriod", "—");
    setText("previewNoticePeriod", "—");

    setText(
      "previewCustomTerms",
      "No additional terms have been specified."
    );

    setText(
      "candidateNameSignature",
      "Candidate Name"
    );

    setText(
      "previewHrName",
      "Authorized Person"
    );

    setText(
      "previewHrDesignation",
      "HR / Authorized Representative"
    );

    setText(
      "previewValidUntil",
      "—"
    );

    setText(
      "paymentParagraph",
      "Compensation details will be mentioned according to the agreed employment terms."
    );
  }


  // ==========================================
  // EVENTS
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
  // INITIALIZE
  // ==========================================

  const offerDateInput =
    document.getElementById("offerDate");

  if (!offerDateInput.value) {

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    offerDateInput.value = today;
  }


  loadSavedData();

  toggleSalaryField();

  passwordInput.focus();

});
