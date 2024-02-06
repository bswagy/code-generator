// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword(){
     //make variables from prompt commands//
    let numbs = Number(window.prompt("please enter the number of characters you want in your password(8-128 characters)")); 
    console.log(numbs);
  
    if (numbs < 8 ||numbs > 128 || isNaN(numbs)) {
      alert("please enter a number between 8 and 128");
      numbs= Number(window.prompt("Please enter the number of character you want in your password(at least 8 and no more than 128 characters)"));
    }


  
  
  const typeOptions = [];

//prompt user for desired length of password
  let lower = window.prompt("Do you want lowercase characters in your password?(yes or no?)");
if (lower.toLowerCase() ==="yes") {
  typeOptions.push("lowercase");
}

  let upper = window.prompt("Do you want uppercase characters in your password?(yes or no?)");
if ( upper ==="yes") {
  typeOptions.push("uppercase");
}

  let special = window.prompt("Do you want special characters in your password(yes or no?)");
if (special ==="yes") {
  typeOptions.push("special character");
}

  let numbers = window.prompt("Do you want numbers in your password(yes or no?)");
if (numbers ==="yes") {
  typeOptions.push("numbers");
}
const characterArray = [];
 const lowercase = "abcdefghijklmnopqrstuvwxyz";
 const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const numbersVar = "1234567890";
 const specialChars = "!@#$%^&*()";


 for (let i =0; i < typeOptions.length;i++) {
    if (typeOptions[i]=== "lowercase"){
      characterArray.push = [...lowercase];
    }
  
    if (typeOptions[i]=== "uppercase"){
      characterArray.push = [...uppercase];
        }
  


    if (typeOptions[i]=== "numbers"){
      characterArray.push = [...numbersVar];
    }
  


    if (typeOptions[i]=== "special character"){
      characterArray.push = [...specialChars];
    }
  }

  // check if no character sets are selected
  if (typeOptions.length === 0) {
    alert ("please select atleast one character set for your password")
    return; // Exit the function if no sets selected
  }

const passcode = [];
for (let i=0; i < numbs; i++) {
  passcode.push(characterArray.push[Math.floor(Math.random()*characterArray.push.length)])
}
  return "generated password: " + passcode.join("");

}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
