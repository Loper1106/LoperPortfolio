'use strict';
/*
let hasDriversLicense = False;
const passTest = True;

if(passTest) hasDriverLicense = True;
if(hasDriversLicense) 
console.log("i can drive");


const calcAge = function(birthYear){
    return 2023 - birthYear
}
//ARrow function
const calcAge2 = birthYear => 2023-birthYear;

console.log(calcAge2(1999));


const checkWinner = (avgDolphins, avgKoalas) =>
(avgDolphins > avgKoalas * 2) ? console.log(`Dolhpins Win
${avgDolphins} vs ${avgKoalas}`) : (avgKoalas > avgDolphins * 2) ? 
console.log(`Koalas Win ${avgKoalas} vs ${avgDolphins}`) :
console.log("No one wins!");

const calcAverage = (score1, score2, score3) =>
(score1 + score2 + score3) / 3;

const averageDolphins = calcAverage(44,23,71);
const averageKoalas = calcAverage(65, 54, 49);

console.log(averageDolphins, averageKoalas);
checkWinner(averageDolphins, averageKoalas);


function calcTip(bills){
    let tot = prompt(`Enter Bill Total: `);
    
    if(tot >= 50 && tot <=300){
         bills.push(tot, 15);
    }else{
        bills.push(tot, 20);
    }
    return
}

let tips = [];
calcTip(tips);
calcTip(tips);
console.log(tips);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Brothers',
    age: 1999,
    job: 'Teacher',
    friends: ['Michael', 'Tim', 'Peter'],
    hasDriversLicense: true,

    calcAge: function(){
        this.age = 2023-this.age;
        return this.age;
    },

    summary: function(){
        return `${this.firstName} is a ${this.calcAge()} 
        year old ${this.job}, and
        ${this.hasDriversLicense ? 'has' : "does not have"}
        a license`;
    }
};

//Dot and BRacket notation
//console.log(jonas)

// jonas.location = 'USA';
// console.log(jonas); 

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends,
// and his best friend is ${jonas.friends[0]}`);

console.log(jonas.summary());


const infoMark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function(){
        return this.weight / this.height ** 2;
    }
}
const infoJohn = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,

    calcBMI: function(){
        return this.weight / this.height ** 2;
    }
}

const bmiMark = infoMark.calcBMI();
const bmiJohn = infoJohn.calcBMI();
console.log(bmiMark, bmiJohn);

bmiMark > bmiJohn ? console.log(
    `${infoMark.firstName}'s BMI (${infoMark.calcBMI()}) is greater than
    ${infoJohn.firstName}'s BMI (${infoJohn.calcBMI()})`):
    console.log(
        `${infoJohn.firstName}'s BMI (${infoJohn.calcBMI()}) is greater than
        ${infoMark.firstName}'s BMI (${infoMark.calcBMI()})`);


for(let i=0; i < 3; i++){
    console.log(i);
}


let i=0;
while(i < 3){
    console.log(i);
    i++;
}



let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [15, 20], totals = [];

function calcTip(bill){
 return bill >=50 && bill <=300 ? bill + tips[0] :
 bill + tips[1];   
}

for(let i = 0; i < bills.length; i++){
    let totalBill = calcTip(bills[i]);
    totals.push(totalBill)
}

console.log(`${bills} ${totals} \n`);

const temperatures = [12, 5, -5, 0, 4];
for(let i = 0; i < temperatures.length; i++){
    console.log(`${temperatures[i]}C in ${i+1} days.`);
}

*/