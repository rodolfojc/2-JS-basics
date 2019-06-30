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
x

var markMass = 70;
var markHeight = 1.90;
var rodolfoMass = 75;
var rodolfoHeight = 1.87;

var markBMI = markMass / (markHeight * markHeight);
var rodolBMI = rodolfoMass / (rodolfoHeight * rodolfoHeight);

var isRodolfoBMIhigher = rodolBMI > markBMI;

console.log('Is Rodolfo\'s BMI highter than Mark BMI? ' + isRodolfoBMIhigher);
console.log('Rodolfo BMI: ' +rodolBMI);
console.log('Mark BMI: ' + markBMI);

*/

/*
IF / ELSE STATEMENTS


var firstName = 'Rodolfo';
var civilStatus = 'Single';
var isMarried = false;

// if(isMarried){}
if(civilStatus === 'Married') {
    console.log(firstName + 'is Married');
} else {
    console.log(firstName + 'is Single');
}

var markMass = 70;
var markHeight = 1.90;
var rodolfoMass = 75;
var rodolfoHeight = 1.87;

var markBMI = markMass / (markHeight * markHeight);
var rodolBMI = rodolfoMass / (rodolfoHeight * rodolfoHeight);

if (rodolBMI > markBMI) {
    console.log('Rodolfo\s BMI is higher than Mark\s BMI');
} else {
    console.log('Mark\s BMI is higher than Rodolfo\s BMI');
}

*/

/*
BOOLEAN LOGIC


var firstName = 'Rodolfo'; 
var age = 45;

if (age < 13){
    console.log(firstName + ' is a boy');
} else if ( age >= 13 && age < 20){ //BETWEEN 13 AND 20
    console.log(firstName + ' is a teenager');       
} else if ( age >= 20 && age < 30){ //BETWEEN 20 AND 30
    console.log(firstName + ' is a man');       
} else {
    console.log(firstName + ' is a old man'); 
}

*/

/*
TERNACY OPERATOR AND SWITCH STATEMENTS


var firstName = 'Rodolfo'; 
var age = 32;

//TERNACY 
age >= 18 ? console.log(firstName + ' drinks beer!!') : console.log(' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/*
if ( age >= 18){
    drink = 'beer';
} else {
    drink = 'juice';
}
*/

/*
//SWITH STATEMENTS

var job = 'Teacher';
switch(job) {
    case 'Teacher':
    case 'Instructor':
        console.log(firstName + ' teaches how to code');
        break;
    case 'Driver':
        console.log(firstName + ' drives an uber in Dublin');
        break;
    case 'Designer':
        console.log(firstName + ' designs websites');
        break;
    default:
        console.log(firstName + ' does something else');
}

age = 10; 

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a man');
        break;
    default:
        console.log(firstName + ' is a old man')
        
}

*/

/*
TRUTHY AND FALSY VALUES 


// FALSY VALUES : UNDEFINED, NULL, 0, '', NaN
// TRUTHY VALUES : NOT FALSY

var heigth;

heigth = 23;

if (heigth || heigth === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable HAS not been defined');
}

//EQUALITY OPERATORS
// === Strict Equality Operator
// == Type Coercion

if (heigth == '23'){
    console.log('The == operator does type coercion');
}else {
    console.log();
}

*/

/*
CODING CHALLENGE 2
*/

var johnsTeam = 89 + 120 + 103;
var mikeTeam = 116 + 94 + 123;
var maryTeam = 97 + 134 + 105;

var aveJohnTeam = johnsTeam / 3;
var aveMikeTeam = mikeTeam / 3;
var aveMaryTeam = maryTeam / 3;

aveJohnTeam = 116;
aveMikeTeam = 117;
aveMaryTeam = 117;


if ( aveJohnTeam > aveMikeTeam && aveJohnTeam > aveMaryTeam ) {
    console.log('John\'s Team is the winner!');
} else if ( aveMikeTeam > aveJohnTeam && aveMikeTeam > aveMaryTeam) {
    console.log('Mike\'s Team is the winner!');
} else if ( aveMaryTeam > aveJohnTeam && aveMaryTeam > aveMikeTeam) {
    console.log('Mary\'s Team is the winner!');

// DRAW
} else if ( aveMikeTeam === aveJohnTeam && aveMikeTeam > aveMaryTeam) {
    console.log('There is a draw between Mike\s Team and John\'s Team');
} else if ( aveMikeTeam === aveMaryTeam && aveMikeTeam > aveJohnTeam) {
    console.log('There is a draw between Mike\s Team and Mary\'s Team');
} else if ( aveJohnTeam === aveMaryTeam && aveJohnTeam > aveMikeTeam) {
    console.log('There is a draw between John\s Team and Mary\'s Team');
} else if ( aveJohnTeam === aveMaryTeam && aveJohnTeam === aveMikeTeam) {
    console.log('There is a draw between John\s Team, Mary\'s Team and Mike\s Team');
}                 

console.log('John\'s Team average: ' + aveJohnTeam);
console.log('Mike\'s Team average: ' + aveMikeTeam);
console.log('Mary\'s Team average: ' + aveMaryTeam);



