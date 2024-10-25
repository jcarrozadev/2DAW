/**
 * 5. Desarrollar un programa que permita ingresar un vector de 8 elementos, e
    informe:
    El valor acumulado de todos los elementos del vector.
    El valor acumulado de los elementos del vector que sean mayores a 36.
    Cantidad de valores mayores a 50.
 */

window.addEventListener('load', () => {

    let intr = [];
    let mayores = 0;
    let suma = 0;

    for (let i = 0; i < 8; i++) {
        intr.push(Number(prompt("Introduce en el vector "+(i+1)+":")));

        suma+=intr[i];

        if (intr[i] > 36) {
            mayores += intr[i];
        }

    }

    alert("La suma total es: "+suma);
    alert("La suma de mayores a 36 es: "+mayores);

});