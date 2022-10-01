import validator from './validator.js';

// Declarando variables
const btn = document.getElementById('confirmar');
const numberAccount = document.getElementById('cardNumber');

// Manipulación del DOM.
btn.addEventListener('click', validarAccount);

function validarAccount() {
  if(numberAccount.value === ''){
    document.getElementById('message1').innerHTML = '¡Campo vacio. Intentalo de nuevo!';
  } else if(validator.isValid(numberAccount.value) ){
    document.getElementById('message').innerHTML = '¡Tu tarjeta es Valida. Puedes continuar!';
    numberAccount.value = validator.maskify(numberAccount.value);
  } else {
    document.getElementById('message1').innerHTML = '¡Tu tarjeta es Valida. Puedes continuar!';
  }
  cleanP();
}
// Función para limpiar el mensaje
function cleanP(){ 
  setTimeout( () => {
    document.getElementById('message').innerHTML = '';
    document.getElementById('message1').innerHTML = '';
  }, 3000);
}