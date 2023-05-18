'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let turn = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function swapTurn(){
    return turn === 0 ? turn = 1 : turn = 0;
}


//Rolls dice        
btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if(dice !== 1){
        document.querySelector(`#score--${turn}`).textContent = 
        Number(document.querySelector(`#score--${turn}`).textContent) + dice;
    }else{
        swapTurn();
    }
})

//Holds
btnHold.addEventListener('click', function(){
    if(document.querySelector(`#score--${turn}`).textContent >= 100){
        console.log(`Player ${turn + 1} wins!`);
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');
    }
    swapTurn();  
})

//Resets Game
btnNew.addEventListener('click', function(){
    btnHold.classList.remove('hidden');
    btnRoll.classList.remove('hidden');
    diceEl.classList.add('hidden');
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
})
