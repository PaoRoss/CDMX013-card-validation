import validator from './validator.js';

document.getElementById('confirmar').addEventListener('click', function(e){
    e.preventDefault();

    let cardNum = document.getElementById('cardNumber');
    validator.isValid(cardNum);


});
console.log(validator);