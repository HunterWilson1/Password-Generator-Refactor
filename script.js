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

function getPasswordCriteria(){
  var passwordCriteria = {};
}

// Length

var length = prompt("Enter the length of the password (at least 8 and 128 characters");


// Prompts for inclusions

var lowercase = confirm("Include lowercase characters?");


var uppercase = confirm("include uppercase characters?");

var numeric = confirm("include numberic characters?")

var special = confirm("Include special characters?")

// Validation

