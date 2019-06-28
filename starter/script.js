/*
VARIABLES AND DATA TYPE

console.log('Hello Rodolfo');

//VARIABLES
// 5 TYPES: NUMBER, STRING, BOOLEAN, UNDEFINED, NULL

var firstName = 'Rodolfo';
console.log(firstName);

var lastName = 'Carvajal';
var age = 32;

var fullAge = true;
console.log(fullAge);

// UNDEFINED VARIBALE

var job;
console.log(job);

job = 'Teacher';

console.log(job);
*/

/*
VARIABLES MUTATION AND COERCION


var firstName = 'Rodolfo'
var age = 28;

console.log(firstName + ' ' +age); //TYPE COERCION

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' +age + ' years old, ' + job + ' is he married?' + isMarried );

age = 'twenty eight';
job = 'Driver';

alert(firstName + ' is a ' +age + ' years old, ' + job + ' is he married?' + isMarried );

var lastName = prompt('What is his last name');
console.log(firstName + lastName);

*/

/*
BASIC OPERATORS
*/

var year, yearRodolfo;
now = 2019;
ageRodolfo = 32;
ageMark = 38;

//MATH OPERATORS
yearRodolfo = now - ageRodolfo;
yearMark = now - ageMark;
console.log(yearRodolfo);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//LOGICAL OPERATORS
var rodolfoOlder = ageRodolfo > ageMark;
console.log(rodolfoOlder);

//TYPEOF OPERATOR
console.log(typeof rodolfoOlder);
console.log(typeof yearRodolfo);

