// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordCriteria = getPasswordCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPasswordCriteria() {
  var passwordCriteria = {};

  // Length

  var length = prompt(
    "Enter the length of the password (at least 8 and 128 characters)"
  );

  // Prompts for inclusions

  var lowercase = confirm("Include lowercase characters?");
  passwordCriteria.lowercase = lowercase;

  var uppercase = confirm("include uppercase characters?");
  passwordCriteria.uppercase = uppercase;

  var numeric = confirm("include numberic characters?");
  passwordCriteria.numeric = numeric;

  var special = confirm("Include special characters?");
  passwordCriteria.special = special;

  // Validation

  var anySelected = lowercase || uppercase || numeric || special;
  while (!anySelected) {
    alert("Select character types for password");
    lowercase = confirm("Include lowercase characters?");
    uppercase = confirm("Include uppercase characters?");
    numeric = confirm("Include numeric characters?");
    special = confirm("Include speical characters?");
    anySelected = lowercase || uppercase || numeric || special;
  }
  return passwordCriteria;
}


function generatePassword(passwordCriteria) {
  var length = passwordCriteria.length;
  var lowercase = passwordCriteria.lowercase;
  var uppercase = passwordCriteria.uppercase;
  var numeric = passwordCriteria.numeric;
  var special = passwordCriteria.special;
  var password = "";

  var characters = "";
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numeric) {
    characters += "01234546789";
  }
  if (special) {
    characters += "!@#%^&*()_+-=[]{};':\"\\|,.<>/?";
  }
}