import validator from './validator.js';

const btnConfirmar = document.getElementById('confirmar');
const numberAccount = document.getElementById("cardNumber");



btnConfirmar.addEventListener('click', validarCuenta);

function validarCuenta() {
  if(numberAccount.value.length <= 12){
    numberAccount.value = validator.maskify(numberAccount.value);
    document.getElementById('error').innerHTML = '¡Tarjeta Invalida, completa los campos!';
  } else if (validator.isValid(numberAccount.value)){
    numberAccount.value = validator.maskify(numberAccount.value);
    document.getElementById('error').innerHTML = '¡Tu tarjeta es Valida. Puedes continuar!';
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


