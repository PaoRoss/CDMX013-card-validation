const validator = {
    isValid: function(numberAccount){

        let reverseNum = numberAccount.split("").reverse().join(""); // en esta variable tenemos card number 
        let newNum = [];

        /*Creamos un bucle for para recorrer el array. 
        Desde que i es igual a cero, hasta que i sea menor a la longitud del numeroIngresado. 
        Se va a ir incrementando de uno en uno */

        for (let i = 0; i < numberAccount.lenght; i++) {
            newNum.push(parseInt(reverseNum[i])); /* los numeros invertidos los añadimos al array newNum*/
        }

        newNum = newNum.map((numero, indice) => indice % 2 === 1 ? numero * 2 : numero);

        newNum = newNum.map(numero => numero > 9 ? numero - 9 : numero);

        let suma = newNum.reduce((anterior, actual) => 
            anterior += actual, 0);

        let resultado = suma % 10 === 0;
        if (resultado) {
            true;
        } else {
            false;
        }
        return resultado;
    },

}

export default validator;