// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 } 

 function generatePassword(){

    var passLength= prompt("Please choose a password length between 8 and 128.");
    if (passLength < 8  || passLength > 128){

      alert("That's not a valid response, please retry.");
      return ""

    } 
    else {

      (passLength > 7 || passLength < 129)
      alert("Thank you!"); 
    }
    // THEN I am presented with a series of prompts for password criteria
    var passLower = confirm("do you want lower case?");
    var passUpper = confirm("do you want upper case?");
    var passNumeric = confirm("do you want numbers?");
    var passSpecial = confirm("do you want special characters?");
    var finalpassword=""

    for (i=0; i<passLength; i++){
     
    var newcharacter = choice()
    console.log({newcharacter})
    function getcharacter() {
      switch (newcharacter) {
        case 'lower':
          if(passLower){
           
         finalpassword= finalpassword+randomFunc[newcharacter]();
            
          }else{
            var newchoices = ["upper","symbol","number"]
            var newchoice =newchoices[Math.floor(Math.random() * newchoices.length)];
            finalpassword=finalpassword+randomFunc[newchoice]();
        }
          
      break;
      case'upper':
        if(passUpper){
          
        finalpassword= finalpassword+randomFunc[newcharacter]();
         
        }else{
          var newchoices = ["lower","symbol","number"]
          var newchoice =newchoices[Math.floor(Math.random() * newchoices.length)];
          finalpassword=finalpassword+randomFunc[newchoice]();          
        }
        
        break;
        case 'symbol':
        if(passSpecial){
          
          finalpassword= finalpassword+randomFunc[newcharacter]();
          
        }else{

          var newchoices = ["upper","lower","number"]
            var newchoice =newchoices[Math.floor(Math.random() * newchoices.length)];
            finalpassword=finalpassword+randomFunc[newchoice]();
          
        }        
        break;

        case 'number':
        if(passNumeric){
          
          finalpassword= finalpassword+randomFunc[newcharacter]();
          
        }else{

          var newchoices = ["upper","symbol","lower"]
            var newchoice =newchoices[Math.floor(Math.random() * newchoices.length)];
            finalpassword=finalpassword+randomFunc[newchoice]();
          
        }      
        break;
        default: finalpassword = ""

      }
      
    }
    getcharacter()
    function choice () {
      return randomcharacters[Math.floor(Math.random() * randomcharacters.length)];      
    }
    }
    return finalpassword
    }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Genertor functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
var randomcharacters =["lower","upper","number","symbol"]


const randomFunc= {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

