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

*/

/*
OPERATORS PRECEDENCE


var now = 2019;
var yearRodolfo = 1987;
var fullAge = 32;

// MULTIPLE OPERATORS
var isFullAge = now - yearRodolfo >= fullAge;

// GROUPING
var ageRodolfo = now - yearRodolfo;
var ageMark = 38;
var average = (ageRodolfo + ageMark) / 2;
console.log(average);

// MULTIPLE ASSIGNMENTS - ASSOCIATIVITY
var x,y;
x = y = (3+5) * 4 - 6;
console.log(x, y);

// MORE OPERATORS

x = x * 2;
x *= 2;
x += 10;
x++;
x--;
*/


/*
CODE CHALLENGE 1
*/

var markMass = 70;
var markHeight = 1.90;
var rodolfoMass = 75;
var rodolfoHeight = 1.87;

var markBMI = markMass / (markHeight * markHeight);
var rodolBMI = rodolfoMass / (rodolfoHeight * rodolfoHeight);

var isRodolfoBMIhigher = rodolBMI >= markBMI;

console.log('Is Rodolfo BMI highter than Mark BMI? ' + isRodolfoBMIhigher);
console.log('Rodolfo BMI: ' +rodolBMI);
console.log('Mark BMI: ' + markBMI);




