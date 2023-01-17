// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordCriteria);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numeric = "01234546789";

const special = "!@#%^&*()_+-=[]{};':\"\\|,.<>/?";




function generatePassword() {
  
  
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
