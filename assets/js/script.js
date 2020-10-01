// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


function generatePassword(){
  // Prompt user for password length
  var passLength = window.prompt("What length password would you like to generate (Choose 8-128).");
  console.log(passLength);

  // check if password is 8-128 characters
  while (! (passLength >= 8 && passLength <= 128)) {
    var passLength = window.prompt("Please choose a number from 8-128");
  }

  // prompt user if they want special characters
  var lCase = window.confirm("Would you like to include lower case characters?");
  var uCase = window.confirm("Would you like to include upper case characters?");
  var numCase = window.confirm("Would you like to include numeric characters?");
  var specCase = window.confirm("Would you like to include special characters?");


};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
