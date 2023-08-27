var characterlength = 8;
var choiceArr =[];

var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

// Assignment code here
var generateBtn = document.querySelector("#generate");

//add event listener generate button
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  //true or false
  
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value =  newPassword;
  } else {
    passwordText.value =  ""; 
  }
  
}
// Get references to the #generate element
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length); 
    password = password + choiceArr[randomIndex];
  }
  return password;
}
//generate prompt first
function getPrompts(){
  choiceArr = [];

  characterlength = parseInt(prompt ("Password must be between 8 - 128 characters"));
 
  if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert ("Character length must include a number, special character, uppercase letter, lowercase letter and 8 - 128 characters. Try again.");
    return false;
  }

 if (confirm ("Would you like lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
 }

 if (confirm ("Would you like uppercase letters in your password?")) {
  choiceArr = choiceArr.concat(upperCaseArr);
 }

 if (confirm ("Would you like special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharArr);
 }

 if (confirm ("Would you like numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArr);
 }
 return true;

}


// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
