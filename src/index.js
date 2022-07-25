import validator from './validator.js';

// Declarando variables
const btnConfirmar = document.getElementById('confirmar');
const numberAccount = document.getElementById("cardNumber");

// Agregando eventos

btnConfirmar.addEventListener('click', validarCuenta);

// Creando función para manipular el DOM

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

// Función para limpiar el mensaje

function limpiar(){ 
  setTimeout( () => {
    document.getElementById('error').innerHTML = '';
  }, 2000);

}


