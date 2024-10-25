/**
 * 10. Ingresar por teclado un valor y luego mostrar la raíz cuadrada de dicho
    valor.
 */

window.addEventListener('load', () => {

    let num = parseInt(prompt("Introduce numero: "));

    alert("La raiz cuadrada del numero introducido es: "+Math.sqrt(num));

});