/**
 * 2. Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen
    notas mayores o iguales a 7 y cuántos menores.
 */

window.addEventListener('load', () => {
    let notas = [];
    for (let i = 0; i < 10; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i + 1}:`));
        notas.push(nota);
    }

    let mayoresOIgualesA7 = notas.filter(nota => nota >= 7).length;
    let menoresA7 = notas.filter(nota => nota < 7).length;

    alert(`Cantidad de notas mayores o iguales a 7: ${mayoresOIgualesA7}`);
    alert(`Cantidad de notas menores a 7: ${menoresA7}`);
});