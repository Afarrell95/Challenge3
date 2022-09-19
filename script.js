// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lettersL = ["abcdefghijklmnopqrstuvwxyz"];
var symbols = ["!@#$%^&*()_+-="];
var nums = ["1234567890"];
var options = [""];
var pass = "";

function generatePassword() {
  var charNum = parseInt(prompt("How many characters between 8 and 128?"));
  if (charNum < 8 || charNum > 128) {
    alert("choose a value between 8 and 128");
    return;
  }
  var lower = confirm("Use lowercase?");
  if (lower) {
    options += lettersL;
  }
  var upper = confirm("Use uppercase?");
  if (upper) {
    options += lettersU;
  }
  var num = confirm("Use numbers?");
  if (num) {
    options += nums;
  }
  var characters = confirm("Use special characters?");
  if (characters) {
    options += symbols;
  }
  for (var i = 0; i < charNum; i++) {
    var randomNumber = Math.floor(Math.random() * options.length);
    pass = pass + options.substring(randomNumber, randomNumber + 1);
  }
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
