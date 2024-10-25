/**
 * 6. Elaborar una función que reciba tres enteros y retorne el promedio
 */

window.addEventListener('load', () => {

    function promedioEnteros(num1,num2,num3) {
        
        let media = (num1+num2+num3)/3

        alert("La media es: "+media);

    }

    promedioEnteros(5,5,4);

});