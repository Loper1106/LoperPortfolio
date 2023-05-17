'use strict';

function addModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function removeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
    console.log(btnsOpenModal[i].addEventListener
    ('click', addModal));

btnCloseModal.addEventListener('click', removeModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        removeModal();
    }
});