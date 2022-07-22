import validator from './validator.js';

document.getElementById("confirmar").addEventListener("click", () => { 
  validar(document.getElementById("cardNumber").value);
});
const titulo = document.getElementById("titulo")// acceso al dom
const ejembtn=document.getElementById('eje') // acceso al dom
ejembtn.addEventListener('click', function(){ // agregamos un evento alboton
  titulo.innerHTML=validator.ejemplo("Laura Cano") // 
})

const validar = (numero) => {
  if (numero === "") {
    document.getElementById("error").innerHTML = "Completa este campo";
  } else {
    let pattern=/^\d{16}$/ // expresiones regulares
    if (pattern.test(numero)) {
        document.getElementById("error").innerHTML = "Tarjeta valida";
    } else {
        document.getElementById("error").innerHTML = "N° de tarjeta invalido";
    }
    limpiar();
  }
  
};
function limpiar () {
  setTimeout(()=>{
    document.getElementById("error").innerHTML = "";
  },1800);
}
