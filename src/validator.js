const validator = {
    isValid: function (numberAccount) {
        /* Aplicamos los metodos split para convertir el string a un array.
         Invertimos el array con reverse.*/

        let reverseNum = numberAccount.split('').reverse().join('');  
        let newArray = [];

        /*Creamos un bucle for para recorrer el array. 
        Desde que i es igual a cero, hasta que i sea menor a la longitud del numeroIngresado. 
        Va a ir incrementando de uno en uno */

        for (let i = 0; i < numberAccount.lenght; i++) {

            /* Se usa metodo push para añadir los elementos a newArray.
            Se usó parseInt para convertir el string a number*/
            newArray.push(parseInt(reverseNum[i])); 
        }

        /* Usamos map para iterar en el arreglo. Multiplicamos *2 los numeros en posición par, si no cumplen esa condición, mantienen su valor */
        newArray = newArray.map((num, indice) => indice % 2 === 1 ? num * 2 : num);

        /*Iteramos mediante el metodo map y creamos la condicion, si el numero es mayor a 9, 
        retorta true y le resta 9, si retorna false mantiene su valor */
        newArray = newArray.map(num => num > 9 ? num - 9 : num);

        /* Usamos reduce en newArray para sumar el numero anterior al actual */
        let sum = newArray.reduce((prevNumber, actNumber) =>
            prevNumber += actNumber, 0);

        /* Asignamos a result lo que obtenemos del operador modulo.
        Usamos condicional if else, si retorna true el numero es valido, si no cumple esta condicion retorna false */
        let result = sum % 10 === 0;
        if (result) {
            true;
        } else {
            false;
        }
        return result;
    },
    maskify: function(numberAccount) {

        let  hide= ''; // Variable vacia para almacenar el string enmascarado

        for (let i = 0; i < numberAccount.length; i++) { // se crea bucle for para recorrer el array
            if (i < numberAccount.length - 4) { // usamos el condicional if...else para enmascarar los numeros excepto los ultimos 4
                hide = hide + '#'; 
            } else {
                hide = hide + numberAccount[i]; 
            }
        }
        return hide;
    }, 

};

export default validator;