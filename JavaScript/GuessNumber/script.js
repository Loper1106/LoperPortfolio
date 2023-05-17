'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Numbers';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 232;
console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof(guess), guess);
    
    if(!guess){
        document.querySelector('.message').textContent = 'No number.';  
    }
});
*/

function incorrect(higher, guess){
    !higher ? document.querySelector('.message').textContent = `${guess} is too High` :
    document.querySelector('.message').textContent = `${guess} is too low`;
    score--;
    document.querySelector('.score').textContent = score;
}

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener(
    'click', function (){
        const input = Number(document.querySelector('.guess').value);

        if(!input){
            document.querySelector('.message').textContent = 'No number';
        }else if( secretNumber === input ){
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'

            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = "CORRECT!";
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }else if(secretNumber !== input){
            if(score > 1){
                secretNumber > input ? incorrect(true, input) : incorrect(false, input);
            }else{
                score = 0;
                document.querySelector('.message').textContent = 'You lose! : (';
            }
        }
});
document.querySelector('.again').addEventListener('click',
    function restart(){
        score = 20;
        document.querySelector('.score').textContent = score;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.number').value = secretNumber;
        
        document.querySelector('.number').textContent = "?";
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.message').textContent = 'Start guessing...';          
    }
);