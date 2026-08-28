document.addEventListener("DOMContentLoaded", function () {

  // =====================================
  // PASSWORD
  // =====================================

  const PASSWORD = "741223741223";

  const lockScreen = document.getElementById("lockScreen");
  const passwordInput = document.getElementById("passwordInput");
  const unlockBtn = document.getElementById("unlockBtn");
  const passwordError = document.getElementById("passwordError");


  function unlockApp() {

    if (passwordInput.value === PASSWORD) {

      lockScreen.style.display = "none";

      passwordError.textContent = "";

    } else {

      passwordError.textContent = "Incorrect password!";

      passwordInput.value = "";

      passwordInput.focus();
    }
  }


  unlockBtn.addEventListener("click", unlockApp);


  passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

      unlockApp();

    }

  });


  // =====================================
  // PAID / UNPAID
  // =====================================

  const paymentType = document.getElementById("paymentType");
  const salary = document.getElementById("salary");


  function updatePayment() {

    if (paymentType.value === "Unpaid") {

      salary.value = "";

      salary.disabled = true;

      salary.placeholder =
        "Not applicable for unpaid role";

    } else {

      salary.disabled = false;

      salary.placeholder =
        "₹10,000 per month";

    }

  }


  paymentType.addEventListener("change", updatePayment);


  // =====================================
  // SIGNATURE UPLOAD
  // =====================================

  const signatureUpload =
    document.getElementById("signatureUpload");

  const signaturePreview =
    document.getElementById("signaturePreview");


  signatureUpload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {

      signaturePreview.src =
        event.target.result;

    };

    reader.readAsDataURL(file);

  });


  // =====================================
  // HELPER FUNCTIONS
  // =====================================

  function value(id, fallback) {

    const element = document.getElementById(id);

    if (!element) return fallback || "—";

    if (element.value.trim() === "") {

      return fallback || "—";

    }

    return element.value.trim();

  }


  function set(id, text) {

    const element = document.getElementById(id);

    if (element) {

      element.textContent = text;

    }

  }


  function formatDate(dateValue) {

    if (!dateValue) {

      return "—";

    }

    const date =
      new Date(dateValue + "T00:00:00");

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );

  }


  // =====================================
  // GENERATE OFFER LETTER
  // =====================================

  const generateBtn =
    document.getElementById("generateBtn");


  generateBtn.addEventListener("click", function () {


    const name =
      value("name", "Candidate");

    const position =
      value("position");

    const department =
      value("department");

    const employmentType =
      value("employmentType");

    const payment =
      value("paymentType");

    const salaryValue =
      value("salary");

    const joiningDate =
      document.getElementById("joiningDate").value;

    const offerDate =
      document.getElementById("offerDate").value;

    const validUntil =
      document.getElementById("validUntil").value;


    const duration =
      value("duration");

    const workMode =
      value("workMode");

    const location =
      value("location");

    const workingHours =
      value("workingHours");

    const workingDays =
      value("workingDays");

    const reportingManager =
      value("reportingManager");

    const noticePeriod =
      value("noticePeriod");

    const customTerms =
      value(
        "customTerms",
        "No additional terms have been specified."
      );

    const hrName =
      value(
        "hrName",
        "Authorized Person"
      );

    const hrDesignation =
      value(
        "hrDesignation",
        "Authorized Representative"
      );


    // OFFER ID

    const offerId =
      "CRO-" +
      new Date().getFullYear() +
      "-" +
      Math.floor(
        1000 + Math.random() * 9000
      );


    set("previewOfferId", offerId);


    // NAME

    set("previewName", name);

    set(
      "candidateSignatureName",
      name
    );


    // POSITION

    set(
      "previewPosition",
      position
    );

    set(
      "previewDepartment",
      department
    );

    set(
      "previewEmploymentType",
      employmentType
    );


    // SUMMARY

    set(
      "summaryPosition",
      position
    );

    set(
      "summaryDepartment",
      department
    );

    set(
      "summaryEmployment",
      employmentType
    );


    // PAYMENT

    if (payment === "Unpaid") {

      set(
        "summarySalary",
        "Unpaid Position"
      );

      set(
        "paymentText",
        "This is an unpaid position. No salary or stipend will be provided for this role unless otherwise agreed in writing by Crodyto."
      );

    } else {

      const compensation =
        salaryValue === "—"
          ? "As per company policy"
          : salaryValue;

      set(
        "summarySalary",
        compensation
      );

      set(
        "paymentText",
        "The agreed salary or stipend for this position is " +
        compensation +
        "."
      );

    }


    // DATES

    set(
      "previewOfferDate",
      formatDate(offerDate)
    );

    set(
      "summaryJoiningDate",
      formatDate(joiningDate)
    );

    set(
      "previewJoiningDate",
      formatDate(joiningDate)
    );

    set(
      "previewValidUntil",
      formatDate(validUntil)
    );


    // OTHER DETAILS

    set(
      "summaryDuration",
      duration
    );

    set(
      "previewReportingManager",
      reportingManager
    );

    set(
      "previewWorkMode",
      workMode
    );

    set(
      "previewLocation",
      location
    );

    set(
      "previewWorkingHours",
      workingHours
    );

    set(
      "previewWorkingDays",
      workingDays
    );

    set(
      "previewNoticePeriod",
      noticePeriod
    );

    set(
      "previewNoticePeriodText",
      noticePeriod
    );


    // TERMS

    set(
      "previewCustomTerms",
      customTerms
    );


    // HR

    set(
      "previewHrName",
      hrName
    );

    set(
      "previewHrDesignation",
      hrDesignation
    );


    // SUCCESS

    alert(
      "Offer Letter Generated Successfully!"
    );


    // Scroll preview into view

    document
      .getElementById("offerDocument")
      .scrollIntoView({
        behavior: "smooth"
      });

  });


  // =====================================
  // PDF BUTTON
  // =====================================

  const pdfBtn =
    document.getElementById("pdfBtn");


  pdfBtn.addEventListener("click", function () {

    window.print();

  });


  // =====================================
  // CLEAR BUTTON
  // =====================================

  const clearBtn =
    document.getElementById("clearBtn");


  clearBtn.addEventListener("click", function () {

    const confirmation =
      confirm(
        "Do you want to clear all information?"
      );


    if (!confirmation) return;


    const inputs =
      document.querySelectorAll(
        ".form-panel input, .form-panel textarea"
      );


    inputs.forEach(function (input) {

      if (input.type !== "file") {

        input.value = "";

      }

    });


    document
      .getElementById("employmentType")
      .value = "Internship";


    document
      .getElementById("paymentType")
      .value = "Paid";


    document
      .getElementById("workMode")
      .value = "Remote";


    salary.disabled = false;

    salary.placeholder =
      "₹10,000 per month";


    signaturePreview.src = "";


    alert("Form cleared successfully!");

  });


  // =====================================
  // DEFAULT OFFER DATE
  // =====================================

  const offerDate =
    document.getElementById("offerDate");


  const today =
    new Date()
      .toISOString()
      .split("T")[0];


  offerDate.value = today;


  // Focus password

  passwordInput.focus();

});
