// learning javascript
// variables are containers for storing data values

let name = 'Eric';
console.log(name);
name = 'Peter';

console.log('Hello ' + name);

let firstName = 'olivin';
let favoriteFood = 'Pizza';

console.log('Hello ' + firstName + ', would you like to eat ' + favoriteFood + ' tonight?');
console.log(`Hello ${firstName}, would you like to eat ${favoriteFood} tonight?`);

let favoriteTeam, favoritePlayer;
favoriteTeam = 'Chelsea';
favoritePlayer = ' Cole Palmer';

console.log(`my favorite team is ${favoriteTeam} and my favorite player is ${favoritePlayer}`);
console.log(` I like it when ${favoritePlayer} scores a goal for ${favoriteTeam}`);

console.log(`Hopefully ${favoriteTeam} will win the champions league this year! and ${favoritePlayer} will be the player of the tournament!`);

let online = true;
console.log(online);

let forSale = true;
console.log(`Is this car for sale? ${forSale}`);

console.log(typeof forSale);
console.log(`${typeof favoritePlayer}`);

// modifying the content of a html element using javascript

// document.getElementById('title').textContent = 'wagwan';
// document.getElementById('title').style.color = 'red';

// arthmetic operators

 let numberOfStudents = 20;
    numberOfStudents = numberOfStudents + 1;
    numberOfStudents = numberOfStudents - 1;
    numberOfStudents = numberOfStudents * 2;
    numberOfStudents = numberOfStudents / 2;
    numberOfStudents = numberOfStudents % 3;
    numberOfStudents = numberOfStudents ** 3;

 console.log(numberOfStudents);
 console.log('hello ' + name);

// accepting user input

const prompt = require('prompt-sync')();

let userName = prompt('what is your name?');
console.log(userName);

let userAge = prompt('how old are you?');

// type conversion

let number = 5;
console.log(typeof(number));

const x = 5;
const y = '5';

const result = x + y;
console.log(result);
console.log(typeof(result));
console.log(typeof(x));
console.log(typeof(y));

// a simple program to determine if a user is old enough to drive

let age = prompt('how old are you?');
age = Number(age);

if (age >= 18){
   console.log('you are old enough to drive');
} else {
   console.log('you are not old enough to drive');
}

// logic operators

let n = prompt('enter a number between 1 and 10');
if (n > 0 && n <= 10){
   console.log(`${n} is between 1 and 10`);
} else {
   console.log(`${n} is not between 1 and 10`);
}


// building a simple grading system

// Ask the user for their score
let score = prompt("Enter your exam score (0–100):");

// Convert the input to a number
score = Number(score);

// Check and display the grade with comments
if (score >= 90 && score <= 100) {
  console.log("Grade: A");
  console.log("Excellent work! 🎉 Keep it up!");
} else if (score >= 80 && score < 90) {
  console.log("Grade: B");
  console.log("Great job! You did really well.");
} else if (score >= 70 && score < 80) {
  console.log("Grade: C");
  console.log("Good effort! A little more practice and you’ll improve.");
} else if (score >= 60 && score < 70) {
  console.log("Grade: D");
  console.log("You passed, but there’s room for improvement.");
} else if (score >= 0 && score < 60) {
  console.log("Grade: F");
  console.log("Unfortunately, you didn’t pass. Review your notes and try again.");
} else {
  console.log("Invalid score! Please enter a number between 0 and 100.");
}
// end of grading system