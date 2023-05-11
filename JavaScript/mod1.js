/*let country = 'USA', continent = 'North America', population = 100;

console.log(country, continent, population);


// Default variable assignment
let age = 30;
age = 31;

// Can not be mutated. Needs to bei initialized 
const birthYear = 1999;

// Should not be used. Legacy Code
var job = 'Programmer';
job = 'teacher';


// BASIC OPERATORS
let currentYear= 2037

const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas,ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas", lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x+=10; // x = x + 10 = 25
x*=4; // x = x * 4 = 100;
x++; // x = x + 1 = 101;
x--; // x = x - 1 = 100;
console.log(x)

//Comparison Operators
console.log(ageJonas > ageSarah);


//Coding Challenge #1

function BMI(mass, height){
    return mass / height ** 2;
}

const massMark = 78, heightMark = 1.69;
const massJohn = 92, heightJohn = 1.95;

const markHigherBMI = BMI(massMark, heightMark) > 
                    BMI(massJohn, heightJohn);

console.log(markHigherBMI);



const firstName = 'Ben';
const job = 'IT administrator';
const birthYear = 1999;
let currentYear = 2023;

const Ben = "I'm " + firstName + ", and I am a " + (currentYear
-birthYear) + " year old " + job;
console.log(Ben);

const benNew = `I'm ${firstName}, and I am a ${currentYear-
birthYear} year old ${job}`;
console.log(benNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines.`);

const age = 12;
const isOldEnough = age >= 18;

if (isOldEnough){
    console.log("Can start driving license.")
}else{
    console.log('nope.')
}



//Coding Challenge #1

function BMI(mass, height){
    return mass / height ** 2;
}

const massMark = 78, heightMark = 1.69;
const massJohn = 92, heightJohn = 1.95;

const bmiMark = BMI(massMark, heightMark)
const bmiJohn = BMI (massJohn, heightJohn);
const markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI){
console.log(`Mark's BMI ${bmiMark} is higher than 
Johns ${bmiJohn}`);
}else{
    console.log(`Mark's BMI ${bmiJohn} is higher than 
Johns ${bmiMark}`);
}

 // Truthy and Falsy Values
// 5 Falsy valuesL: 0, '', undefined, null, NaN

const money = 0;
if(money){
    console.log("Don't spend it all.")
}else{
    console.log("No money")
}


const age = 18;
if(age === 18) console.log("YOu became an adult!")
 // === Strict eqaulity 
// == type conversion performed

const scoreDolphins =  99;
const scoreKoalas = 99;

console.log(scoreDolphins, scoreKoalas);

if ((scoreDolphins > 100) && (scoreKoalas > 100)){
    if((scoreDolphins > scoreKoalas) && (scoreDolphins > 100)){
        console.log(`Dolphins win with a score of ${scoreDolphins}`)
    }else if((scoreKoalas > scoreDolphins) && (scoreKoalas >100)){
        console.log(`Koalas win with a score of ${scoreKoalas}`)    
    }else{
        console.log(`Game tied with score of ${scoreDolphins}`)
    }
}else{
    console.log("No one wins.")
}


const day = 'Monday';
switch(day){
    case 'Monday':
        console.log(`Today is Monday!!`);
        break;
    case 'Tuesday':
        console.log('TOday is Tuesday!');
        break;
    case "Wednesday":
        console.log("Hump day!");
        break;
}


const age = 23;

age >= 18 ? console.log("I like to drink wine.")
: console.log("I like to drink water.");


let billValue = 50;
billValue >=50 && billValue<=300 ? tip = .15 : tip = .20;

console.log(`The bill was ${billValue}, the tip was ${tip}, 
and total value is ${tip*billValue + billValue}`);

*/

