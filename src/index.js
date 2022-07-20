document.getElementById("confirmar").addEventListener("click", () => { 
  validar(document.getElementById("cardNumber").value);
});

const validar = (numero) => {
  if (numero === "") {
    return;
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
