/**
 * 1. Elaborar una función a la cual le enviemos tres enteros y muestre el
    menor.
 */

window.addEventListener('load', () => {

    function envioEnteros(num1,num2,num3) {
        return Math.min(num1,num2,num3);
    }

    console.log(envioEnteros(3,5,9));

});