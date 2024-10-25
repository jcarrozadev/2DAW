/**
 * 8. Desarrollar un programa que permita cargar 5 números enteros y luego nos
    informe cuántos valores fueron pares y cuántos impares.
    Emplear el operador "%" en la condición de la estructura condicional.
    if (valor%2==0)
    El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0;
    13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.
 */

window.addEventListener('load', () => {

    let numeros = [5,4,3,2,1];

    for(let i=0;i<numeros.length;i++) {
        if (numeros[i]%2==0) {
            alert(`El numero ${numeros[i]} es par`);
        } else {
            alert(`El numero ${numeros[i]} es impar`);
        }
    }

});