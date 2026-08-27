// Generate a random Offer ID
function generateOfferId() {

  const randomNumber =
    Math.floor(1000 + Math.random() * 9000);

  return "CRO-" + randomNumber;
}


// Format Date
function formatDate(dateValue) {

  if (!dateValue) return "—";

  const date = new Date(dateValue);

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  );

}


// Current Date
function setCurrentDate() {

  const today = new Date();

  document.getElementById(
    "currentDate"
  ).innerText =
    today.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    );

}


// Generate Offer Letter
function generateLetter() {

  const name =
    document.getElementById("name").value
    || "Candidate";

  const position =
    document.getElementById("position").value
    || "Position";

  const department =
    document.getElementById("department").value
    || "Department";

  const employmentType =
    document.getElementById("employmentType").value;

  const salary =
    document.getElementById("salary").value
    || "—";

  const joiningDate =
    document.getElementById("joiningDate").value;

  const location =
    document.getElementById("location").value
    || "—";

  const hrName =
    document.getElementById("hrName").value
    || "HR / Authorized Person";

  const terms =
    document.getElementById("terms").value;


  // Update Preview

  document.getElementById(
    "previewName"
  ).innerText = name;


  document.getElementById(
    "previewPosition"
  ).innerText = position;


  document.getElementById(
    "previewDepartment"
  ).innerText = department;


  document.getElementById(
    "previewEmployment"
  ).innerText = employmentType;


  document.getElementById(
    "detailPosition"
  ).innerText = position;


  document.getElementById(
    "detailDepartment"
  ).innerText = department;


  document.getElementById(
    "detailSalary"
  ).innerText = salary;


  document.getElementById(
    "detailJoiningDate"
  ).innerText =
    formatDate(joiningDate);


  document.getElementById(
    "detailLocation"
  ).innerText = location;


  document.getElementById(
    "previewHrName"
  ).innerText = hrName;


  if (terms.trim() !== "") {

    document.getElementById(
      "previewTerms"
    ).innerText = terms;

  }


  // Generate Offer ID

  document.getElementById(
    "offerId"
  ).innerText =
    generateOfferId();


  // Save Data

  const offerData = {

    name,
    position,
    department,
    employmentType,
    salary,
    joiningDate,
    location,
    hrName,
    terms

  };


  localStorage.setItem(
    "crodytoOfferLetter",
    JSON.stringify(offerData)
  );


  alert(
    "Offer Letter Generated Successfully!"
  );

}


// Clear Form

function clearForm() {

  document
    .querySelector("form");

  const inputs =
    document.querySelectorAll(
      "input, textarea"
    );


  inputs.forEach(input => {

    input.value = "";

  });


  document.getElementById(
    "employmentType"
  ).selectedIndex = 0;


  localStorage.removeItem(
    "crodytoOfferLetter"
  );


  generateLetter();

}


// Print Letter

function printLetter() {

  window.print();

}


// Load saved data

function loadSavedData() {

  const savedData =
    localStorage.getItem(
      "crodytoOfferLetter"
    );


  if (!savedData) return;


  const data =
    JSON.parse(savedData);


  document.getElementById(
    "name"
  ).value = data.name || "";


  document.getElementById(
    "position"
  ).value = data.position || "";


  document.getElementById(
    "department"
  ).value = data.department || "";


  document.getElementById(
    "employmentType"
  ).value =
    data.employmentType
    || "Internship";


  document.getElementById(
    "salary"
  ).value = data.salary || "";


  document.getElementById(
    "joiningDate"
  ).value =
    data.joiningDate || "";


  document.getElementById(
    "location"
  ).value =
    data.location || "";


  document.getElementById(
    "hrName"
  ).value =
    data.hrName || "";


  document.getElementById(
    "terms"
  ).value =
    data.terms || "";


  generateLetter();

}


// Initialize

setCurrentDate();

loadSavedData();
