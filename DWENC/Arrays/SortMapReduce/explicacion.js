'use strict'

const navegadores = [
    {
        name: 'Chrome',
        year: 2008
    },
    {
        name: 'Firefox',
        year: 2004
    },
    {
        name: 'Safari',
        year: 2003
    },
    {
        name: 'Opera',
        year: 1996
    },
    {
        name: 'IE',
        year: 1995
    },
    {
        name: 'Edge',
        year: 2015
    }
]


/********************************
 *            SORT              *
 *******************************/

/**
 *  Ordenar por orden alfabético con sort y localCompare
 */ 
function ordenarPorOrdenAlfabetico(){
    navegadores.sort((a, b) => a.name.localeCompare(b.name));
    console.log(navegadores);

}


/**
 *  Ordenar por año, de menor a mayor.
 */
function ordenarPorAnio(){
    navegadores.sort((a, b) => a.year - b.year);
    console.log(navegadores);
}

function mostrarNavegadores(){
    for(let navegador of navegadores){
        console.log(navegador.name + ' - ' + navegador.year);
    }
}

ordenarPorOrdenAlfabetico();
ordenarPorAnio();
mostrarNavegadores();

/**
 *   Tras ejecutar los 3 métodos, podemos ver por consola que nuestro array se ha modificado cambiando el orden de sus elementos.
 *   Si queremos evitar que nuestro array se modifique, podemos crearnos copias de este para no perder el orden.
 */

function copiaArray(){
    const arr = [...navegadores];
    
    console.log("Mostrando el array ordenando los elementos por año descendente...");
    arr.sort((a, b) => b.year - a.year);
    console.log(arr);

    console.log("Mostrando el array como estaba en tras ejecutar las tres funciones anteriores...");
    console.log(navegadores);
}

copiaArray();

/********************************
 *            MAP               *
 *******************************/
// El método map en JavaScript es una función de los arrays que permite crear un nuevo array al aplicar una función a cada elemento del array original.
// https://www.freecodecamp.org/espanol/news/javascript-map-como-utilizar-la-funcion-js-map-metodo-de-arreglo/

const estudiantes = [
    { nombre: "Ana", edad: 20, calificacion: 85 },
    { nombre: "Luis", edad: 22, calificacion: 90 },
    { nombre: "Juan", edad: 21, calificacion: 78 },
    { nombre: "Maria", edad: 23, calificacion: 92 }
  ];

// Sintaxis básica de map
estudiantes.map((elemento, indice, arrayOriginal) => {
    // Transformación que queremos aplicar
});
  

// Ejemplo 1: Queremos obtener los nombres de todos los estudiantes.
const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log(nombres); 

// Ejemplo 2: Aumentar la calificacion de cada estudiante en 5 puntos:
const estudiantesActualizados = estudiantes.map(estudiante => {
    return {
      ...estudiante, // usamos el operador propagación (...)  para copiar las propiedades originales
      calificacion: estudiante.calificacion + 5
    };
  });
  
  console.log(estudiantesActualizados);
  /*
  Salida:
  [
    { nombre: "Ana", edad: 20, calificacion: 90 },
    { nombre: "Luis", edad: 22, calificacion: 95 },
    { nombre: "Juan", edad: 21, calificacion: 83 },
    { nombre: "Maria", edad: 23, calificacion: 97 }
  ]
  */

// Ejemplo 3: Queremos crear mensajes personalizados para cada estudiante indicando su nombre y calificación
const mensajes = estudiantes.map(estudiante => {
  return `El estudiante ${estudiante.nombre} tiene una calificación de ${estudiante.calificacion}.`;
});

console.log(mensajes);
/*
Salida:
[
  "El estudiante Ana tiene una calificación de 85.",
  "El estudiante Luis tiene una calificación de 90.",
  "El estudiante Juan tiene una calificación de 78.",
  "El estudiante Maria tiene una calificación de 92."
]
*/



/********************************
 *            REDUCE            *
 *******************************/
//  El método reduce en JavaScript es muy poderoso para reducir un array a un único valor
//  (que puede ser un número, un objeto, una cadena, etc.), aplicando una función de acumulación sobre cada elemento del array.

/*La sintaxis básica de reduce...
estudiantes.reduce((acumulador, elementoActual, indice, arrayOriginal) => {
    // Lógica de acumulación
  }, valorInicial);
*/

/** 
  - acumulador: Es el valor acumulado que vamos construyendo a medida que recorremos el array.
  - elementoActual: El elemento actual que está siendo procesado.
  - indice: La posición del elemento actual (opcional).
  - arrayOriginal: El array completo que está siendo reducido (opcional).
  - valorInicial: El valor inicial del acumulador.

*/


// Ejemplo 1: Calcular el total de las calificaciones
const totalCalificaciones = estudiantes.reduce((acumulador, estudiante) => {
    return acumulador + estudiante.calificacion;
},0);

console.log(totalCalificaciones);


// Ejemplo 2: Encontrar al estudiante con la calificación más alta
const mejorEstudiante = estudiantes.reduce((acumulador, estudiante) => {
    return (acumulador.calificacion > estudiante.calificacion) ? acumulador : estudiante;
});

console.log(mejorEstudiante);


// Ejemplo 3: Agrupar estudiantes por aprobados o suspensos
const clasificacion = estudiantes.reduce((acumulador, estudiantes) => {
    if(estudiantes.calificacion >= 80){
        acumulador.aprobados.push(estudiantes);
    }else{
        acumulador.suspensos.push(estudiantes);
    }
    return acumulador;
}, {aprobados: [], suspensos: []});

console.log(clasificacion);


// Aquí estamos acumulando los estudiantes en un objeto con dos arrays: aprobados y suspensos. 
// en cada iteración, "reduce" verifica si el estudiante está aprobado o suspenso y lo añade al array correspondiente.


 /**
  * 
  *     El metodo "reduce" podemos decir que nos sirve para:
  *     - Sumar o acumular valores
  *     - Buscar un valor máx o min
  *     - Agrupar elementos por categorias
  *     - Construir un nuevo objeto a partir de los elementos de un array
  * 
  **/