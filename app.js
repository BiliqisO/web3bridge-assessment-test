const submitData = document.getElementById("submit");
function validateForm(e) {
  e.preventDefault();
  const the = document.getElementById("the");
  const thank = document.getElementById("thank");
  const input = document.getElementsByTagName("input");

  document.getElementById("nameError").textContent = "";
  document.getElementById("numberError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  document.getElementsByTagName("form")[0].reset();
  var isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  if (number === "") {
    document.getElementById("numberError").textContent = "Number is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Validate password
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required.";
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long.";
    isValid = false;
  }

  // Validate confirm password
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Confirm Password is required.";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  if (isValid === true) {
    the.style.display = "none";
    thank.style.display = "block";
  }

  return isValid;
}

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", validateForm);

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// submitData.addEventListener("click", successful);
