/**
 * 6. En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
    realizar un programa que lea los sueldos que cobra cada empleado e informe
    cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
    Además el programa deberá informar el importe que gasta la empresa en sueldos
    al personal.
 */

window.addEventListener('load', () => {

    let empleados = [100,300,500,450,150];
    let entre = 0;
    let mas = 0;

    for(let i = 0; i < empleados.length+1; i++) {

        if (empleados[i] >= 100 && empleados[i] <= 300) 
            entre++;
        
        if (empleados[i] > 300)
            mas++;

    }

    alert("Entre 100 y 300: "+entre);
    alert("Más de 300: "+mas);

});