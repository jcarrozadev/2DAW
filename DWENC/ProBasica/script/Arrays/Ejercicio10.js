/**
 * 10. Se realizó un censo provincial y se desea procesar la información obtenida en
    dicho censo. De cada una de las personas censadas se tiene la siguiente
    información: número de documento, edad y sexo ('femenino' o 'masculino').
    Se pide confeccionar un programa que lea los datos de cada persona censada (para
    finalizar ingresar el valor cero en el número de documento) e informar:

    a) Cantidad total de personas censadas.
    b) Cantidad de varones.
    c) Cantidad de mujeres.
    d) Cantidad de varones cuya edad varía entre 16 y 65 años.
 */

window.addEventListener('load', () => {

    let personas = [];

    function agregarPersonas(dni,edad,sexo) {
        let persona = [{
            dni: dni,
            edad: edad,
            sexo: sexo
        }];

        personas.push(persona);
    }

    agregarPersonas("80082522R", "19", "M");
    agregarPersonas("90010291S", "26", "F");
    agregarPersonas("80021921X", "25", "F");


});