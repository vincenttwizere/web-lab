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
let userName = window.prompt('what is your name?');
console.log(userName);

let userAge = window.prompt('how old are you?');
