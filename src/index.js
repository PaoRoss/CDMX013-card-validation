import validator from './validator.js';

const btnConfirmar = document.getElementById('confirmar');
const numberAccount = document.getElementById("cardNumber");

btnConfirmar.addEventListener('click', validarCuenta);

function validarCuenta() {
  if(numberAccount.value.length <= 12){
    document.getElementById('error').innerHTML = '¡Tarjeta Invalida, completa los campos!';
  } else if (validator.isValid(numberAccount.value)){
    document.getElementById('error').innerHTML = '¡Tu tarjeta es Valida!';
  } else {
    document.getElementById('error').innerHTML = '¡Intentalo de nuevo!';
  }
  limpiar();
}

function limpiar(){
  setTimeout( () => {
    document.getElementById('error').innerHTML = '';
  }, 2000);
}

