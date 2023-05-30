'use strict';
/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199){
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }    
    console.log(booking)
    bookings.push(booking);
};

createBooking('LH123');


const flight = 'LH234';
const ben = {
    fullName: "Benjamin Loper",
    passport: 123345456234,
};

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'MR. ' + passenger.name;
    if(passenger.passport === 123345456234){
        alert('check in ');
    }else{
        alert('wrong passport');
    }
};

checkIn(flight, ben)


const oneWord = function(str){
    return str.replaceAll(' ', ''.toLowerCase());
};

const upperFirstWord = function(str){
    const [first,...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function(str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed string : ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);  
}

transformer('Javascript is the best!', upperFirstWord)
transformer('Javascript is the best', oneWord);

const high5 = function(){
    console.log('👋');
};

['jonas', 'martha', 'adam'].forEach(high5);


const greet = function(greeting){
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}


const greeter = greet('Hey!');

greeter('Ben');
greeter('Steven');
greeter('ben');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Arrow');


const lufuthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
}   

lufuthansa.book(234, 'Ben');

const euroWings = {
    name: 'euroWings',
    iataCode: 'EW',
    bookings: [],

}

const swiss ={
    name: 'Swiss airlines',
    iataCode: 'LX',
    bookings: [],
}

const book = lufuthansa.book;


//book(23, 'Sara williams');
book.call(euroWings, 23, 'Sarah williams');
console.log(euroWings.bookings);
book.call(lufuthansa, 99, 'Ben Lopez');
console.log(lufuthansa.bookings);

book.call(swiss, 69, 'Sarah williams');
console.log(swiss.bookings);


const bookEW = book.bind(euroWings);
bookEW(23, 'Benjy Loper');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('BBBB');

//const addTax = (rate, value) => value + value * rate;
//console.log(addTax(.1, 200));

//const addVAT = addTax.bind(null, 0.23);
//console.log(addVAT(100));

const addTax = function(rate){
    return function(value){
        console.log(value + value * rate);
    };
};

const taxed = addTax(.23);
taxed(100);
taxed(1000);
taxed(54);


const poll = {
    choices: ['JavaScript', 'Python', 'Rust', 'C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer: function(){
        const selection = Number(prompt(`What is your  favorite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++`));

        if((selection < this.answers.length)&&(selection >= 0)){
            this.answers[selection]++;
        }
        console.log(`${selection}: ${this.choices[selection]}`);
    },
    displayResults: function(){
        console.log(`Poll Results: ${this.answers}`);
    },
};

const results = poll.displayResults;
document.querySelector('#button').addEventListener('click', poll.registerNewAnswer.bind(poll));
//document.querySelector('.results').addEventListener('click', poll.displayResults.call(poll));
results.call(poll);

const runOne = function(){
    console.log('This will never run again');
};

runOne();

(function(){ 
    console.log('Now this will ony run once');
})();

(() => console.log('This will run once as well'))();

{
    const isPrivate = 23;
    var notPrivate = 47;
}
//console.log(isPrivate);
console.log(notPrivate);

const secureBooking = function(){
    let passengerCount = 0;
    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
};

const booking = secureBooking();
booking();
booking();
booking();
console.dir(booking)


let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
};

g();
f();


const boardingPassengers = function(n, wait){
    const perGroup = n /3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`)
    }, wait*1000);

    console.log(`Will starting boarding in ${wait} seconds`);
}

boardingPassengers(100, 3);

(function(){
    const header = document.querySelector('h1');
    header.style.color= 'red';
    document.querySelector('#button').addEventListener('click', function(){
        header.style.color = 'blue';    
    });
})();

*/