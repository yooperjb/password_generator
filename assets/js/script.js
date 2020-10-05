// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // write to passwordText textarea in html page
  passwordText.value = password;
};

function generatePassword() {
  
  pw = '';
  // Prompt user for password length
  var passLength = window.prompt("What length password would you like to generate (Choose 8-128).");
  // check if password is 8-128 characters
  while (!(passLength >= 8 && passLength <= 128)) {
    var passLength = window.prompt("Please choose a number from 8-128");
  }
  
  // run passOptions to get character options - returns array of true choices
  var trueKeysArr = passOptions();
  
  // create random chars for the length of the password chosen
  for (i = 0; i < passLength; i++) {
    
    // ramdomly select one of the character types chosen, from the array
    charType = trueKeysArr[Math.floor(Math.random()* trueKeysArr.length)];
    // add random char to pw string by calling generateChar
    pw = pw + (generateChar(charType));
    
  }
  return pw;

};

// user selected password charcter options. Returns array of true choices.
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

  // check if every option is false, if so alert user and ask again
  if (Object.values(options).every(item => !item)) {
    window.alert("You must select at least one type of character type.");
    passOptions();
  }
  else {
    // get list of passOptions keys
    var optionKeys = Object.keys(options);
    // create an array of true keys
    var trueKeys = optionKeys.filter(function(id) {
      return options[id];
    })
    return trueKeys;
  }
};

// generate a random character based on char type
function generateChar(char) {
  
  switch(char) {

    case 'lCase': // generate random lower case character
      tempChar = String.fromCharCode(Math.floor((Math.random() * 26)+ 97));
      return tempChar;

    case 'uCase': // generate random upper case character
      tempChar = String.fromCharCode(Math.floor((Math.random() * 26)+ 65));
      return tempChar;

    case 'numCase': // generate random number
      tempChar = String.fromCharCode(Math.floor((Math.random() * 10)+ 48));
      return tempChar;
    
    case 'specCase': // generate random spec character
      tempChar = String.fromCharCode(Math.floor((Math.random() * 15)+ 33));
      return tempChar;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
