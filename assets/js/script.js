// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


function generatePassword(){
  var passLength = window.prompt("What length password would you like to generate (Choose 8-128).");
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
