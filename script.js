// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lettersL = [];
for (let letter of lettersU) {
  lettersL.push(letter.toLowerCase());
}
var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var options = [];
options = options.concat(lettersL);
options.concat(lettersU);
options.concat(nums);
options.concat(symbols);
console.log(options, options.length);

function generatePassword() {
  var charNum = prompt("How many characters between 8 and 128?");
  if (charNum < 8 || charNum > 128) {
    alert("choose a value between 8 and 128");
    return;
  }

  var lower = confirm("Use lowercase?");
  if (lower === true) {
    options.push(lettersL);
  }
  var upper = confirm("Use uppercase?");
  if (upper === true) {
    options.push(lettersU);
  }
  var num = confirm("Use numbers?");
  if (num === true) {
    options.push(nums);
  }
  var characters = confirm("Use special characters?");
  if (characters === true) {
    options.push(symbols);
  }
  for (var i = 0; i <= options; i++) {
    var random = random + Math.floor(Math.random() * charNum);
    // var pass = pass + options[random];

    // return pass;
    return random;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
