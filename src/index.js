import validator from './validator.js';

const numero = document.querySelector('input');

numero.addEventListener('input', () => {
    numero.setCustomValidity('');
    numero.checkValidity();
    console.log(numero.checkValidity());
});

numero.addEventListener('invalid', ( )=> {
    numero.setCustomValidity('Completa el campo N° de tarjeta*.');
})

