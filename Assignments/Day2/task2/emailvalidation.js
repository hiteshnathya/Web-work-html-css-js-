// Regular expression to validate email format
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // matches most common email formats

// Function to validate email
function validateEmail(email) {
  // returns true if email matches the regex pattern, false otherwise
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

// Add event listener to submit button
document.getElementById('submit-btn').addEventListener('click', (e) => {
  e.preventDefault(); // prevent default form submission behavior
  const email = document.getElementById('email').value; // get the email input value
  const errorMessage = document.getElementById('error-message'); // get the error message element

  // validate the email and display error message if invalid
  if (validateEmail(email)) {
    errorMessage.textContent = ''; // clear error message
    alert('Email is valid!'); // display success alert
  } else {
    errorMessage.textContent = 'Invalid email format. Please try again.'; // display error message
  }
});