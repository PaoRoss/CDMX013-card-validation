const validator = {
 isValid: function(cardNum) {
    alert(cardNum);
    let reverseNum = cardNum.split('').reverse().join('');

    console.log(cardNum);
    return;
 }
};

export default validator;