const nombrePokemon = document.getElementById("pokemon-input");
const botonBuscar = document.getElementById("search-btn");

/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

async function buscarPokemon(){

    let url = fetch("https://pokeapi.co/api/v2/"+nombrePokemon);
    url.then(respuesta => respuesta.json())
    url.then(pokemon => {
        let id = pokemon.id;
        let nombre = pokemon.nombre;
        let sprite = pokemon.sprites.front_default;

        const contenido = `
            Nombre: ${nombre}<br>
            ID: ${id}<br>
            Sprite: <img src=${sprite}>
        `;

        document.getElementById("pokemon-data").innerHTML = contenido;
    });
}

/**
 *  Descomentar para hacer uso de la función.
 */
document.getElementById('search-btn').addEventListener('click',buscarPokemon);


/**
 * Ejercicio 3: buscar pokemon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX(){
    /**
     * Tu código aquí.
     */
}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/
/**
$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); 
*/
