/**
 * 7. Realizar un programa que permita cargar dos listas de 3 valores cada una.
    Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor
    (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
    Tener en cuenta que puede haber dos o más estructuras repetitivas en un
    algoritmo.
 */

window.addEventListener('load', () => {

    let lista1 = [];
    let lista2 = [];

    function introducir(lista) {
        let suma = 0;

        for(let i=0; i<3;i++) {
            lista.push(Number(prompt("Introduce lista, posicion "+(i+1)+":")));
            suma+=lista[i];
        }

        return suma;
    }

    if (introducir(lista1) > introducir(lista2))
        alert("Lista 1 mayor");
    else
        alert("Lista 2 mayor");

    if (introducir(lista1) == introducir(lista2))
        alert("Listas iguales");


});