/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

async function buscarPokemon(){

    const nombrePokemon = document.getElementById("pokemon-input").value.toLowerCase();
    const botonBuscar = document.getElementById("search-btn");
    const infoPokemon = document.getElementById("pokemon-data");

    let url = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);

    if (!url) {
        throw new Error("No se ha encontado Pokemon");
    }

    let pokemon = await url.json();

    let nombre = infoPokemon.querySelector("#nombrePokemon");

    if (!nombre) {
        nombre = document.createElement('p');
        nombre.id = 'nombrePokemon';
        infoPokemon.append(nombre);
    }

    nombre.textContent = "Nombre: "+pokemon.name;

    let id = infoPokemon.querySelector("#idPokemon");

    if (!id) {
        id = document.createElement('p');
        id.id = 'idPokemon';
        infoPokemon.append(id);
    }

    id.textContent = 'ID: '+pokemon.id;

    let imagen = infoPokemon.querySelector("#imagenPokemon");

    if (!imagen) {
        imagen = document.createElement('img');
        imagen.id = 'imagenPokemon';
        infoPokemon.append(imagen);
    }

    imagen.src = pokemon.sprites.front_default;


    return pokemon;
}

/**
 *  Descomentar para hacer uso de la función.
 */
// document.getElementById('search-btn').addEventListener('click',buscarPokemon);


/**
 * Ejercicio 3: buscar pokemon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX(){

    const nombrePokemon = $('#pokemon-input').val().toLowerCase();
    const infoPokemon = $('#pokemon-data');
    const botonAgregar = $('agregar-collection-btn');

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
        method: 'GET',
        success: function(pokemon) {
            // Actualizar el nombre del Pokémon
            let nombre = $('#nombrePokemon');
            if (nombre.length === 0) {
                nombre = $('<p id="nombrePokemon"></p>');
                infoPokemon.append(nombre);
            }
            nombre.text('Nombre: ' + pokemon.name);

            // Actualizar el ID del Pokémon
            let id = $('#idPokemon');
            if (id.length === 0) {
                id = $('<p id="idPokemon"></p>');
                infoPokemon.append(id);
            }
            id.text('ID: ' + pokemon.id);

            // Actualizar la imagen del Pokémon
            let imagen = $('#imagenPokemon');
            if (imagen.length === 0) {
                imagen = $('<img id="imagenPokemon" />');
                infoPokemon.append(imagen);
            }
            imagen.attr('src', pokemon.sprites.front_default);

            botonAgregar.on();

        },
        error: function() {
            let error = $('<p>No se ha encontrado el Pokémon. Por favor, intenta nuevamente.</p>');
            infoPokemon.append(error);
        }
    });

}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/

$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); 

