document.querySelector('.R_form').addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

  var age = document.forms["R_form"]["age"].value;
  if (age < 2 || age > 100) {
    alert("The age should be between 2 and 100.");
    return false  }

  var name = document.forms["R_form"]["name"].value;
  if (name == "") {
    alert("Name must be filled out.");
    return false;
  }

  var email = document.forms["R_form"]["email"].value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    alert("Not a valid e-mail address.");
    return false;
  }

  var password = document.forms["R_form"]["password"].value;
  if (password == "") {
    alert("Password must be filled out.");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (!/[a-z]/.test(password)) {
    alert("Password must contain at least one lowercase letter.");
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    alert("Password must contain at least one uppercase letter.");
    return false;
  }

  if (!/[0-9]/.test(password)) {
    alert("Password must contain at least one digit.");
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    alert("Password must contain at least one special character.");
    return false;
  }

  // If form input is valid, display registration completion message and reset input fields
  alert('Registration completed!');
  const formElements = document.querySelectorAll('.R_form input');
  formElements.forEach(element => {
    element.value = ''; // Reset the input field to blank
  });
}

function login() {
  // Get all form input elements
  const formElements = document.querySelectorAll('.R_form input');

  // Validate form input
  let isValid = true;
  let password = document.getElementById("password").value;
  let lowerCaseLetter = /[a-z]/.test(password);
  let upperCaseLetter = /[A-Z]/.test(password);
  let digit = /\d/.test(password);
  let specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < 8 || !lowerCaseLetter || !upperCaseLetter || !digit || !specialCharacter) {
    isValid = false;
    alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.");
  }

  // If form input is valid, display registration completion message
  if (isValid) {
    alert('Registration completed!');
    formElements.forEach(element => {
      element.value = ''; // Reset the input field to blank
    });
  }
}