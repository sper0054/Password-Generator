// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);


//variables & arrays
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special= [ "!", "@", "#", "$", "%", "^", "&", "*", "~", "{", "}", "|","_","[", "]","?", "`", "(", ")", "+", "-", ".", "/", "<", ">", "="];


//generate password function
function generatePassword() {
    //length prompt
    var lengthprompt = window.prompt('How many characters, between 8 and 128, would you like your password to contain?');
      //check length parameters to be between 8 and 28 and not blank. if unacceptable return to the prompt.
      if ( lengthprompt === "" || lengthprompt === null || lengthprompt < 8 || lengthprompt > 128) {
        window.alert('Must be a valid length between 8 and 128. Please try again.');
       return generatePassword();
    }
    //log the prompt results and alert
    console.log (lengthprompt)
    window.alert ("Your password will be " + lengthprompt + " characters long.")

    //ask player if they'd like lowercase
    var asklower = window.confirm('Click OK to include lowercase characters.');
  
    //ask player if they'd like uppercase
    var askupper = window.confirm('Click OK to include uppercase characters.');

    //ask player if they'd like numbers
    var asknumeric = window.confirm('Click OK to include numeric characters.');

    //ask player is they'd like special characters
    var askspecial = window.confirm('Click OK to include special characters');

    //ensure one character type (lower/upper/numbers/special) is true
    while (asklower === false && askupper === false && asknumeric === false && askspecial === false) {
    window.alert ('At least one character type must be selected');
      var asklower = window.confirm('Click OK to include lowercase characters.');
      var askupper = window.confirm('Click OK to include uppercase characters.');
      var asknumeric = window.confirm('Click OK to include numeric characters.');
      var askspecial = window.confirm('Click OK to include special characters');
    }

    //if they selected to include the variable, create a new variable that has all the possible options
    var possibleOptions = []

    if (asklower) {
      possibleOptions = possibleOptions.concat(lower)
    }

    if (askupper) {
      possibleOptions = possibleOptions.concat(upper)
    }

    if (asknumeric) {
      possibleOptions = possibleOptions.concat(numeric)
    }

    if(askspecial) {
      possibleOptions = possibleOptions.concat(special)
    }

    console.log(possibleOptions)

    //build the password based on above possible options
    var randomPassword = ""
    for (var i = 0; i < lengthprompt; i++) {
      randomPassword = randomPassword + possibleOptions[Math.floor(Math.random() * possibleOptions.length)];
      console.log(randomPassword)
    }
    return randomPassword;
  }

// Write password function
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

