// User object
const user = {
    name: 'hitesh',
    email: 'hiteshnathya@gmail.com',
    age: 24
  }; // stores user's name, email, and age
  
  // Function to change name
  function changeName(newName) {
    // updates the user's name property and displays the new name on the page
    user.name = newName;
    document.getElementById('name').textContent = `Name: ${user.name}`;
  }
  
  // Function to update email
  function updateEmail(newEmail) {
    // updates the user's email property and displays the new email on the page
    user.email = newEmail;
    document.getElementById('email').textContent = `Email: ${user.email}`;
  }
  
  // Function to calculate birth year
  function calculateBirthYear(currentYear) {
    // calculates the user's birth year based on their age and the current year
    const birthYear = currentYear - user.age;
    document.getElementById('birth-year').textContent = `Birth Year: ${birthYear}`;
  }
  
  // Display initial user data
  document.getElementById('name').textContent = `Name: ${user.name}`; // display initial name
  document.getElementById('email').textContent = `Email: ${user.email}`; // display initial email
  document.getElementById('age').textContent = `Age: ${user.age}`; // display initial age
  calculateBirthYear(2023); // calculate and display initial birth year (assuming current year is 2023)
  
  // Add event listeners to buttons
  document.getElementById('change-name-btn').addEventListener('click', () => {
    // prompt user to enter a new name and update the name when button is clicked
    const newName = prompt('Enter new name:');
    changeName(newName);
  });
  
  document.getElementById('update-email-btn').addEventListener('click', () => {
    // prompt user to enter a new email and update the email when button is clicked
    const newEmail = prompt('Enter new email:');
    updateEmail(newEmail);
  });