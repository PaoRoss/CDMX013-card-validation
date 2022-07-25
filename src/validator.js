const validator = {
    isValid: function (numberAccount) {

        let reverseNum = numberAccount.split('').reverse().join(''); // en esta variable tenemos card number 
        let newNum = [];

        /*Creamos un bucle for para recorrer el array. 
        Desde que i es igual a cero, hasta que i sea menor a la longitud del numeroIngresado. 
        Se va a ir incrementando de uno en uno */

        for (let i = 0; i < numberAccount.lenght; i++) {
            newNum.push(parseInt(reverseNum[i])); /* los numeros invertidos los añadimos al array newNum*/
        }

        /* Usamos map para iterar en el arreglo y le decimos que si el indice es modulo de dos entonces numtiplique el numero por 2 */
        newNum = newNum.map((numero, indice) => indice % 2 === 1 ? numero * 2 : numero);

        /* Usamos map para iterar en el arreglo y le decimos que si numero es mayor a 9 entonces le reste 9 al numero*/
        newNum = newNum.map(numero => numero > 9 ? numero - 9 : numero);

        /* Creamos una variable para guardar la suma y samos el metodo reduce para sumar el numero anterior con el actual*/
        let suma = newNum.reduce((anterior, actual) =>
            anterior += actual, 0);

        /* Creamos una variable para guardar el resultado de obtener el modulo 10 de la suma anterior. 
        Si el resultado es igual a 0 es verdadero, de lo contrario es falso*/
        let resultado = suma % 10 === 0;
        if (resultado) {
            true;
        } else {
            false;
        }
        return resultado;
    },
    maskify: function(numberAccount) {

        let  enmascarar= ''; // Variable vacia para almacenar el string enmascarado

        for (let i = 0; i < numberAccount.length; i++) { // se crea bucle for para recorrer el array
            if (i < numberAccount.length - 4) { // usamos el condicional if...else para enmascarar los numeros excepto los ultimos 4
                enmascarar = '#' + enmascarar; // Nota: en esta linea, el orden en que concatenamos no afecta el resultado
            } else {
                enmascarar = enmascarar + numberAccount.charAt(i); // Nota: el orden en que concatenamos si afecta el resultado
            }
        }
        return enmascarar;
    }

};

export default validator;