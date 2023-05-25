'use strict';

const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y ,z);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Italy',
    categories: ['itItalian', 'Pizzaria', 'Vegetarian', 'organic'],
    starterMenu: ['Ficaccua', 'Brushcetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['PIzza', 'Pasta', 'Risotto'],
    openingHours: {
        thu:{
            open: 12,
            close: 22
        },
        fri:{
            open:11,
            close:23
        },
        sat: {
            open: 0,
            close: 24
        }
    },

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicous pasta with ${ing1}, ${ing2}, and ${ing3}`);
    }
}
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2+ arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const str = 'jonas';
console.log(...str);

const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"),prompt("Let's make pasta! Ingredient 3?")];
restaurant.orderPasta(...ingredients);


const arr = [1, 2, 3, 4, 5];
const [a, b, ...others] = arr;
console.log(a, b, others);

console.log(3 || 'jonas');
console.log('' || 'JOnas');
console.log(true || 0);
console.log(undefined || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2)

if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.restaurant.orderPizza('mushrooms', 'spinach');


//falsy values
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullishvalues: null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
    name: 'capri',
    numGuests: 20,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}

//rest1.numGuests = num1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONymOUS>';
console.log(`${rest1.owner} \n ${rest2.owner}`);

console.log(rest1.numGuests);
console.log(rest2.numGuests);

*/
const players1 = {
    fieldPlayers: [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies'
    ],
    gk: '',
};
const players2 = {
    fieldPlayers: [
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby'
    ],
    gk: '',
    
};

const game = {
    score: 4,
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },

    printGoals: function(...inp){
        console.log(...inp);
    }
};

players1.gk = players1.fieldPlayers[0];
players2.gk = players2.fieldPlayers[0];
console.log(players1.gk, players2.gk);

const allPlayers = [...players1.fieldPlayers, ...players2.fieldPlayers];
console.log(allPlayers);
const players1Final = [...players1.fieldPlayers, 'Thiago', 'Countinho', 'Perisic'];
console.log(players1Final);

for(const [i, scorer] of game.scored.entries()){
    console.log(`Goal ${i}: ${scorer}`);
}


const odds = Object.values(game.odds);


let average = 0
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for(const [i, x] of Object.entries(game.odds)){
    console.log(`Odd of ${i}: ${x}`);
}

const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
]);

console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

for (const [time, call] of gameEvents){
    let half = '';
    time < 45 ? half = 'FIRST' : half = "SECOND"
    console.log(`[${half} HALF] ${time}: ${call}`);
}

/*
game.printGoals(0, 1, 1, 3,1,2,2,2,2,2,2,2,2,2,2,2,2,2);
game.odds.team1 > game.odds.team2 ? console.log(`Team 1 more likely to win at: ${game.odds.team1}`) : 
console.log(`Team 2 more likely to win at: ${game.odds.team2}`);


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()){
    console.log(`${i+1}: ${el}`);
}

console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for(const day of days){
    const open = restaurant.openingHours[day]?.open || 'closed';
    console.log(`On ${day}, we are open from ${open}`);
}


for(const day of Object.keys(restaurant.categoriesopeningHours)){
    console.log(day);
}

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'RIzotto', 'Pasta']);
console.log(ordersSet);

console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Bread');
ordersSet.delete('Pasta');

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];

const staffUniqeu = [...new Set(staff)];
console.log(staffUniqeu);

console.log(new Set('BenjaminLoper').size);

const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1 , 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugual');
rest
    .set('categories', ['Italian', 'pizzeria', 'vegetarian', 'organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

console.log(rest.get('name'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); 

console.log(rest.has("categories"));

const question = new Map([['question', 'what is the best programming language in the world??'], 
[1, 'C'],
[2, 'Java'],
[3, 'JavaScript'],
['correct', 3],
[true, 'Correct!'],
[false, 'Try again']
]);

console.log(question);


console.log(question.get('question'));
for(const [key,value] of question){
    if(typeof(key) === 'number') console.log(`${key}: ${value}`);
}

const answer = Number(prompt('YOur answer'));
answer === 3 ? console.log(question.get(true)) : console.log(question.get(false));

const airline = 'TAP Air Portugal';
const plant = 'A320';

console.log(airline.length);
console.log(airline.indexOf('A'));
console.log(airline.indexOf('Air'));    

console.log(airline.slice(4, 7 ));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-3));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat){
    //B and E Middle Seats
    seat.slice(-1) === 'B' || seat.slice(-1) === "E" ? 
    console.log('Middle Seat') : console.log("NOt middle");
}

checkMiddleSeat('11B')

const priceGB = '288,97';
const priceUS= priceGB.replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. boading door 23';
console.log(announcement.replaceAll('door', 'gate'));

const plane = 'A320neo';
//console.log(plane.includes("A320"));
//console.log(plane.includes("Boeing"));

const checkLuggage = function(item){
    if((item.includes('knife') || item.includes('gun'))){
        return false
    }
    return true;
};

console.log(checkLuggage('I have a laptop, some food, and a knife'))
console.log(checkLuggage("I have socks and toothbrush"));
console.log(checkLuggage('I have a pillow and a gun for protection'));


console.log('Benjamin Loper'.split(' '));
const [firstname, lastname] = 'Benjamin LOper'.split(" ");
console.log([firstname, lastname.toUpperCase()].join(' '));


const censorCard = function(number){
    let str = String(number)
    let cardNum = str.slice(-4);
    return cardNum.padStart(str.length, "*");
};

console.log(censorCard('1234 5612312312312312312312312378 9123'));
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

//let testCase = prompt('Enter Class Name');

const titleCase = function(camelCase){
    let word = camelCase.replaceAll(' ', '').split('_');
    word[0] = word[0].toLowerCase();
    let tCase = word[1].slice(0,1).toUpperCase();
    let lCase = word[1].slice(1, word[1].length).toLowerCase();
    return word[0]+tCase+lCase
}

const camelCase = titleCase(testCase);
console.log(camelCase);