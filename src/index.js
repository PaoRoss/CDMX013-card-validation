import validator from './validator.js';

// Declarando variables

const btn = document.getElementById('confirmar');
const numberAccount = document.getElementById("cardNumber");
let regex = new RegExp('^\\d+$');

// Manipulación del DOM.

btn.addEventListener('click', validarAccount);

function validarAccount() {
  if(!regex.test(numberAccount)){
    document.getElementById('message1').innerHTML = '¡Tarjeta Invalida. Intentalo de nuevo!';
  } else if (validator.isValid(numberAccount.value)){
    numberAccount.value = validator.maskify(numberAccount.value);
    document.getElementById('message').innerHTML = '¡Tu tarjeta es Valida. Puedes continuar!';
  } else {
    document.getElementById('message1').innerHTML = '¡Intentalo de nuevo!';
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


