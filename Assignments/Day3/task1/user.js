// Get the forms
const registrationForm = document.getElementById("registrationForm");
const loginForm = document.getElementById("loginForm");

// Function to validate the registration form
function validateRegistrationForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (username.trim() === "") {
    alert("Username is required.");
    return false;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (password.trim() === "") {
    alert("Password is required.");
    return false;
  }

  if (password!== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}

// Function to validate the login form
function validateLoginForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.trim() === "") {
    alert("Username is required.");
    return false;
  }

  if (password.trim() === "") {
    alert("