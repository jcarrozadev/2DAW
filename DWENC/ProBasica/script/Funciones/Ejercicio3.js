/**
 * 3. Confeccionar una función a la cual le envíe tres enteros y retorne el mayor
    de ellos.
 */

window.addEventListener('load', () => {

    function envioEnteros(num1,num2,num3) {
        return Math.max(num1,num2,num3);
    }

    console.log("El numero max es: "+envioEnteros(3,5,9));

});