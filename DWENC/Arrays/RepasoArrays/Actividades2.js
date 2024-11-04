/** Javier Arias Carroza 2ºDAW */

'use strict'

const personas = [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Luis", edad: 30, ciudad: "Barcelona" },
    { nombre: "Sara", edad: 22, ciudad: "Sevilla" },
    { nombre: "Miguel", edad: 28, ciudad: "Valencia" },
    { nombre: "Lucía", edad: 35, ciudad: "Bilbao" }
];


/**
 *  1. Obtener un array con todos los nombres
 */

const arrayNombres = personas.map(persona => persona.nombre);

//console.log(arrayNombres);

/**
 *  2. Encontrar a la persona con nombre "Sara" y mostrar su nombre y edad
 */

// const nombreSara = personas.forEach(persona => {
//     if(persona.nombre === "Sara") {
//         console.log(persona.nombre+" con edad "+persona.edad);
//     }
// });

const nombreSara = personas.filter(persona=>persona.nombre==="Sara");

//console.log(nombreSara);

/**
 *  3. Almacenar en un array nuevo llamado "mayoresDe25" todas las personas que sean mayores de 25 y mostrarlos por pantalla
 */

// const mayoresDe25 = personas.map(persona => {
//     if(persona.edad > 25) {
//         console.log(persona.nombre+" tiene "+persona.edad);
//     }
// });

const mayoresDe25 = personas.filter(persona => persona.edad > 25);

//console.log(mayoresDe25);

/**
 *  4. Calcular la edad promedio de todas las personas
 */

const edadTotal = personas.reduce((total,persona) => total + persona.edad,0);

const edadPromedio = edadTotal / personas.length;

//console.log("La edad promedio es "+edadPromedio);

/**
 *  5. Agregar una nueva propiedad (atributo) a cada persona, por ejemplo, un valor booleano que se llame "activoEnTrabajo"
 */

const nuevaPropiedad = () => {

    personas.forEach(persona => {
        persona.activoEnTrabajo = true;
    }); 
    
    console.log(personas);

};

//nuevaPropiedad();

/**
 *  6. Listar todas las ciudades sin duplicar
 */

//const ciudadesSinDuplicar = [...new Set (personas.map(persona => persona.ciudad))];

const ciudadesSinDuplicar = Array.from(new Set (personas.map(persona => persona.ciudad)));

//console.log(ciudadesSinDuplicar);

/**
 *  7. Ordenar el array por edad (de menor a mayor)
 */

const ordenadoEdad = personas.sort((a,b) => a.edad - b.edad);

//console.log(ordenadoEdad);

/**
 *  8. Contar el número de personas por ciudad.
 */
/*
const numeroPersonas = personas.reduce((total,persona) => {
    total[persona.ciudad] = (total[persona.ciudad] || 0) + 1; // Si existe, se quedará con su valor, si no existe, agregará su contador en 0 y sumará 1
    return total;
},{});
*/

const numeroPersonas = () => {

    let objPersonas = {};

    for(let i = 0; i < personas.length; i++) {

        let persona = personas[i];
        
        if (!objPersonas[persona.ciudad]) {
            objPersonas[persona.ciudad] = 0;
        } 

        objPersonas[persona.ciudad] += 1;

    }

    console.log(objPersonas);
} 

//numeroPersonas();

/**
 *  9. Obtener el objeto de persona con mayor edad y mostrar su nombre, edad y ciudad
 */

const mayorEdad = () => {

    let personaMayor = personas[0];

    for(let i = 0; i < personas.length; i++) {
        if (personas[i].edad > personaMayor.edad)
            personaMayor = personas[i];
    }

    console.log("La persona con mayor edad es "+personaMayor.edad)
};

//mayorEdad();


/**
 * 10. Comprobar si todas las personas son mayores de 20 años y mostrar un mensaje por pantalla ("Son mayores de 20") en caso de que sea cierto.
 */

const personasMayores20 = () => {

    // El every hará que si todas las personas cumplen la condicion, devolverá true
    
    if ( personas.every(persona => persona.edad > 20) ) {
        console.log("Todos son mayores de 20");
    }
}

//personasMayores20();
