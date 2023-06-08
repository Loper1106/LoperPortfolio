'use strict';

const checkDogs = function(arr1, arr2){
    //Julias Dogs
    const arr1Adjusted = arr1.slice();
    arr1Adjusted.splice(0,1);
    arr1Adjusted.splice(-2);
    for (const [i, dogs1] of arr1Adjusted.entries()){
        dogs1 >= 3 ? console.log(`Dog ${i+1} is an adult, and is ${dogs1} years old`) :
        console.log(`Dog ${i+1} is still a puppy`);
    }
    console.log('\nKATES DOGS');
    //Kates Dogs
    for (const [i, dogs1] of arr2.entries()){
        dogs1 >= 3 ? console.log(`Dog ${i+1} is an adult, and is ${dogs1} years old`) :
        console.log(`Dog ${i+1} is still a puppy`);
    }
};

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

checkDogs(dogsJulia, dogsKate);