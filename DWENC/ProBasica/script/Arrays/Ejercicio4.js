/**
 * 4. Realizar un programa que pida la carga de dos vectores numéricos. Obtener la
    suma de los dos vectores, dicho resultado guardarlo en un tercer vector del
    mismo tamaño. Sumar componente a componente.
 */

window.addEventListener('load', () => {
    
    let array1 = [];
    let array2 = [];
    let array3 = [];

    for (let i = 0 ; i < 5 ; i++) {
        let intNumero = parseInt(prompt("1. Introduce numero "+(i+1)+":"));

        array1.push(intNumero);
    }

    for (let i = 0 ; i < 5 ; i++) {
        let intNumero = parseInt(prompt("2. Introduce numero "+(i+1)+":"));

        array2.push(intNumero);
    }

    for (let i = 0 ; i < 5 ; i++) {
        array3.push(array1[i] + array2[i]);
    }

    console.log(array3);

});