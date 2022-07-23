const validator = {
    isValid: function invertirCadena(cardNumber) {
        return cardNumber.split("").reverse().join("");
        }

    };

  export default validator;