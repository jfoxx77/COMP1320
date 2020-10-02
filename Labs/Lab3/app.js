let exampleString = "This is a string"; // typeof exampleString == string
let exampleNumber = 7; // typeof exampleNumber == number
let isValid = true; // isValid == boolean
let undeclaredVar;                      // typeof obj== "undefined"
let nullObj = null;                     // typeof nullObj == ""

// console.log(typeof exampleString);
// console.log(typeof exampleNumber);
// console.log(typeof isValid);
// console.log(typeof undeclaredVar);
// console.log(typeof null);

// var fruits = ["Apple", "Banana", "Orange", "Strawberry", "Pineapple",
// "Pear", "Grapes", "Passionfruit", "Kiwi", "Mandarin"];

// let firstFruit = fruits[0];
// let numOfFruits = firstFruit.length;
// let lastFruit = fruits[numOfFruits - 1];
// fruits.unshift('cherry');
// fruits.push('cherry');
// let prevFirstFriut = fruits.shift();
// let prevLastFriut = fruits.pop();
// let kiwiIndex = fruits.indexOf('Kiwi');
// fruits.splice(kiwiIndex, 1); // Assuming kiwiIndex >= 0

// for(let i = 0; i < fruits.length; i++){
//   console.log('I am eating a ' + fruits[i]);
// }

var person = { name: 'Sarah', height: '6 feet', age: 22 };

// console.log(person.age);
// console.log(person["age"]);
person['hairColor'] = 'black';
person.hairColor = 'brown';
delete person.height;

// if (!('eyeColor' in person)){
//   console.log('Missing key');
// }


// console.log(person);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//       console.log(key + ": " + person[key]);
//   }
// }

// let personKeys = Object.keys(person);
// for (let key of personKeys){
//    console.log(key);
// }

const readlineSync = require('readline-sync');
let login = {userName: 'jfoxx77', password: 'admin'};
// let securityQuestions = [
//   {question: 'What city where you born in? ', expectedAnswer: 'Vancouver'},
//   {question: 'What was your first job? ', expectedAnswer: 'Teacher'},
//   {question: 'What was the name of your pet? ', expectedAnswer: 'Loulou'}
// ];

// const numOfsecurityQuestions = securityQuestions.length
// for (let i = 0; i < numOfsecurityQuestions; i++){
//   let answer = readlineSync.question(securityQuestions[i].question);
//   let isExpectedAnswer = answer == securityQuestions[i].expectedAnswer;

//   if (!isExpectedAnswer){
//     console.log('Invalid response, please try again later');
//     break;
//   } else if (i + 1 == numOfsecurityQuestions){
//     console.log('Success. You may now access your account');
//   }
// }


function getUserLoginPassword(){
  let password = readlineSync.question('Enter password for ' + login.userName + ': ', {
    hideEchoBack: true
  });
  return password;
}

function isPassWordCorrect(givenPassword, expectedPassword){
  return givenPassword == expectedPassword;
}

function printLoginAttemptMessage(isCorrectLogin){
  if(isCorrectLogin){
    console.log('You may access your account');
  } else{
    console.log('Invalid password entered, try again.\n');
  }
}

function promptUserToReEnterPassword(){

  printLoginAttemptMessage(false);
  let numOfPasswordTriesLeft = 3;

  while (numOfPasswordTriesLeft > 0){

    let password = getUserLoginPassword();
    
    if (isPassWordCorrect(password, login.password)){
      printLoginAttemptMessage(true);
      break;
    } else{
      if (numOfPasswordTriesLeft == 1){
        console.log('You have tried too many times.');
        break;
      }
      printLoginAttemptMessage(false);
      numOfPasswordTriesLeft--;
    }
  }
  
}

function validateUserLogin(){
  
  let password = getUserLoginPassword();

  if(isPassWordCorrect(password, login.password)){
    printLoginAttemptMessage(true);
  } else {
    promptUserToReEnterPassword();
  }
  
}

validateUserLogin();



