/**
 * 7. Confeccionar una función que solicite la carga de 5 valores por teclado y
    retorne su suma
 */

window.addEventListener('load', () => {

    let suma = 0;

    for(let i = 1; i<=5;i++){
        let num = parseInt(prompt("Introduce numero "+i+":"));

        suma = suma + num;
    }

    alert("La suma es: "+suma);

});