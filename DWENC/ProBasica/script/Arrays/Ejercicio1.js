/**
 * Desarrollar un programa que solicite la carga de 10 números e imprima la suma
 * de los últimos 5 valores ingresados.
 */

window.addEventListener('load', () => {
    let numeros = [];

    function introduce(numeros) {
        for(let i = 1; i <= 10; i++){
            numeros.push(Number(prompt('Introduce numero')));
        }
    }

    let suma = (numeros) => {
        let suma = 0;
        for(let i = 4; i <= numeros.length - 1; i++){
            suma += numeros[i];
        }
        return suma;
    }

    introduce(numeros);
    alert('La suma de los 5 ultimos es: '+suma(numeros));
});
