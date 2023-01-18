// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numeric = "01234546789";

const special = "!@#%^&*()_+-=[]{};':,.<>/?";

let characters ="";

//first function is to generate a password. I used if/else statements to select the criteria
function generatePassword() {
  let passwordLength = prompt("Choose a length between 8 and 128 characters.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128");
  } else {
    let lowerCase = confirm("Do you want to use lower case characters?");
    if(lowerCase){
      characters += lowercase
    };
    let uppercase = confirm("Do you want to use upper case characters?");
    if(upperCase){
      characters += uppercase
    };
    let numericCharacters = confirm("Do you want to use numeric characters?");
    if (numeric){
      characters += numeric
    };
    let specialCharacters = confirm("Do you want to use special characters?");
    if (special){
      characters += special
    };

    if (
      lowerCase === false &&
      upperCase === false &&
      special === false &&
      numeric === false
    ){
      alert("Please select one charcter type.");
      generatePassword();
    }
  }

  //
  let password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
