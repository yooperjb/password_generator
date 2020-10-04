// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = []
var numbers = []
var special = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // write to passwordText textarea in html page
  //passwordText.value = password;
  passwordText.value = "This is the where the Password Will GO";

};


function generatePassword() {

  // Prompt user for password length
  var passLength = window.prompt("What length password would you like to generate (Choose 8-128).");
 

  // check if password is 8-128 characters
  while (!(passLength >= 8 && passLength <= 128)) {
    var passLength = window.prompt("Please choose a number from 8-128");
  }
  
  console.log(passLength);
  // run passOptions to get character options
  passOptions();

/*
  for (i=0, i < passLength, i++) {

  }
*/
};

/*
String.fromCharCode(57);
This would be 9. This is from the UTF-16 table

Nums are from CharCode 48-57
Capital letters from 65-90
Lower case letters from 97-122
Special characters are numerous so maybe best to just put in array?

*/

function passOptions() {
  var options = {
    lCase: false,
    uCase: false,
    numCase: false,
    specCase: false
  };

  // prompt user if they want lower case characters
  options.lCase = window.confirm("Would you like to include lower case characters?");
  
  // prompt user if they want upper case characters
  options.uCase = window.confirm("Would you like to include upper case characters?");

  // prompt user if they want numerical characters
  options.numCase = window.confirm("Would you like to include numeric characters?");

  // prompt user if they want special characters
  options.specCase = window.confirm("Would you like to include special characters?");

  // check if every option is false, if so alert user
  if (Object.values(options).every(item => !item)) {
    window.alert("You must select at least one type of character type.");
    console.log(options);
    passOptions();
  }
  else {
    console.log("Sweet, at least one option was selected");
    console.log(options);
    var optionKeys = Object.keys(options);
    var trueKeys = optionKeys.filter(function(id) {
    return options[id];
    })
    
    return trueKeys;
    //return options;
  }

};

// should switch be used here?
function generateChar(char) {
  if (char === 'lCase') {

  }
  else (char === 'uCase') {

  }
  else (char === 'numCase') {

  }
  else (char === 'pecCase') {

  }

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
