// ===============================
// CRODYTO OFFER LETTER GENERATOR
// ===============================


let uploadedSignature = "";


// ===============================
// GENERATE OFFER ID
// ===============================

function generateOfferId() {

  const year =
    new Date().getFullYear();

  const random =
    Math.floor(
      1000 + Math.random() * 9000
    );

  return `CRO-${year}-${random}`;

}


// ===============================
// FORMAT DATE
// ===============================

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


// ===============================
// GET VALUE
// ===============================

function getValue(id, fallback = "—") {

  const element =
    document.getElementById(id);

  if (!element) {
    return fallback;
  }

  return element.value.trim() || fallback;

}


// ===============================
// SET TEXT
// ===============================

function setText(id, value) {

  const element =
    document.getElementById(id);

  if (element) {
    element.textContent = value;
  }

}


// ===============================
// GENERATE LETTER
// ===============================

function generateLetter() {

  const name =
    getValue("name", "Candidate");

  const position =
    getValue("position");

  const department =
    getValue("department");

  const employmentType =
    getValue("employmentType");

  const paymentType =
    getValue("paymentType");

  const salary =
    getValue("salary");

  const joiningDate =
    getValue("joiningDate");

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
    getValue("offerDate");

  const validUntil =
    getValue("validUntil");

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


  // OFFER ID

  setText(
    "offerId",
    generateOfferId()
  );


  // CANDIDATE

  setText(
    "previewName",
    name
  );

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
    "summaryDepartment",
    department
  );

  setText(
    "summaryEmployment",
    employmentType
  );


  // PAYMENT TEXT

  let compensationText = "";

  if (
    paymentType === "Unpaid"
  ) {

    compensationText =
      "Unpaid Internship / Engagement";

    setText(
      "paymentParagraph",
      "This is an unpaid engagement. No salary or stipend will be provided unless otherwise agreed by Crodyto in writing."
    );

  } else {

    compensationText =
      salary;

    setText(
      "paymentParagraph",
      `This position is classified as a paid ${employmentType.toLowerCase()} role. Your agreed compensation will be ${salary}, subject to applicable terms, attendance, and company policies.`
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


  // EMPLOYMENT

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

  setText(
    "detailNoticePeriod",
    noticePeriod
  );


  // NOTICE PERIOD

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


  // SAVE DATA

  saveData();

  alert(
    "Crodyto Offer Letter Generated Successfully!"
  );

}


// ===============================
// SIGNATURE UPLOAD
// ===============================

document
  .getElementById("signatureUpload")
  .addEventListener(
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

      reader.readAsDataURL(
        file
      );

    }
  );


// ===============================
// SAVE DATA
// ===============================

function saveData() {

  const data = {

    name: getValue("name", ""),
    email: getValue("email", ""),
    phone: getValue("phone", ""),

    offerDate:
      document.getElementById(
        "offerDate"
      ).value,

    position:
      getValue("position", ""),

    department:
      getValue("department", ""),

    employmentType:
      getValue("employmentType", ""),

    paymentType:
      getValue("paymentType", ""),

    salary:
      getValue("salary", ""),

    joiningDate:
      document.getElementById(
        "joiningDate"
      ).value,

    duration:
      getValue("duration", ""),

    workMode:
      getValue("workMode", ""),

    location:
      getValue("location", ""),

    workingHours:
      getValue("workingHours", ""),

    workingDays:
      getValue("workingDays", ""),

    reportingManager:
      getValue(
        "reportingManager",
        ""
      ),

    noticePeriod:
      getValue(
        "noticePeriod",
        ""
      ),

    validUntil:
      document.getElementById(
        "validUntil"
      ).value,

    customTerms:
      getValue(
        "customTerms",
        ""
      ),

    hrName:
      getValue(
        "hrName",
        ""
      ),

    hrDesignation:
      getValue(
        "hrDesignation",
        ""
      ),

    signature:
      uploadedSignature

  };


  localStorage.setItem(
    "crodytoOfferLetterData",
    JSON.stringify(data)
  );

}


// ===============================
// LOAD SAVED DATA
// ===============================

function loadSavedData() {

  const saved =
    localStorage.getItem(
      "crodytoOfferLetterData"
    );

  if (!saved) {
    return;
  }

  const data =
    JSON.parse(saved);


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


  generateLetter();

}


// ===============================
// CLEAR FORM
// ===============================

function clearForm() {

  const inputs =
    document.querySelectorAll(
      "input:not([type='file']), textarea"
    );

  inputs.forEach(
    input => {
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


  document.getElementById(
    "signatureUpload"
  ).value = "";


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


  generateLetter();

}


// ===============================
// PRINT / PDF
// ===============================

function printLetter() {

  window.print();

}


// ===============================
// INITIALIZATION
// ===============================

window.addEventListener(
  "DOMContentLoaded",
  function () {

    const today =
      new Date()
        .toISOString()
        .split("T")[0];


    document.getElementById(
      "offerDate"
    ).value = today;


    loadSavedData();

  }
);
