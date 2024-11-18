/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

async function buscarPokemon(){

    const nombrePokemon = document.getElementById("pokemon-input").value.toLowerCase(); // Pokemon que introduce
    const infoPokemon = document.getElementById("pokemon-data"); // Contenedor para poner la info del pokemon

    try {

        // URL Pokemon introducido
        let url = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);

        // Comprobamos que el pokemon existe si no válida 
        if (!url.ok) {
            throw new Error("No se ha encontrado Pokemon");
        }

        let pokemon = await url.json();

        // Limpiar el contenedor para evitar duplicados
        infoPokemon.innerHTML = '';

        // Nombre del Pokemon (id #nombrePokemon)
        let nombre = infoPokemon.querySelector("#nombrePokemon");

        if (!nombre) {
            nombre = document.createElement('p');
            nombre.id = 'nombrePokemon';
            infoPokemon.append(nombre);
        }

        nombre.textContent = "Nombre: "+pokemon.name;

        // ID del Pokemon (id #idPokemon)
        let id = infoPokemon.querySelector("#idPokemon");

        if (!id) {
            id = document.createElement('p');
            id.id = 'idPokemon';
            infoPokemon.append(id);
        }

        id.textContent = 'ID: '+pokemon.id;

        // Imagen del Pokemon (id #imagenPokemon)
        let imagen = infoPokemon.querySelector("#imagenPokemon");

        if (!imagen) {
            imagen = document.createElement('img');
            imagen.id = 'imagenPokemon';
            infoPokemon.append(imagen);
        }

        if (!pokemon.sprites || !pokemon.sprites.front_default) {
            throw new Error(`Introduce nombre para mostrar información`);
        } else {
            imagen.src = pokemon.sprites.front_default;
        }       

        $(document).ready(function () {
            $('#agregar-collection-btn').on('click', agregarAColeccion);
        })

    } catch (error) {
        console.error(error.message);
        infoPokemon.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function agregarAColeccion(pokemon) {
    // Obtener la colección actual desde localStorage
    let coleccion = JSON.parse(localStorage.getItem('coleccionPokemon')) || [];

    // Verificar si el Pokémon ya está en la colección
    const existe = coleccion.some(p => p.id === pokemon.id);
    if (existe) {
        alert(`${pokemon.name} ya está en tu colección.`);
        return;
    }

    // Agregar el Pokémon a la colección
    coleccion.push({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default
    });

    // Guardar la colección actualizada en localStorage
    localStorage.setItem('coleccionPokemon', JSON.stringify(coleccion));
    alert(`${pokemon.name} se ha agregado a tu colección.`);
}

/**
 *  Descomentar para hacer uso de la función.
 */
document.getElementById('search-btn').addEventListener('click',buscarPokemon);


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

        },
        error: function() {
            let error = $('<p>No se ha encontrado el Pokémon.</p>');
            infoPokemon.append(error);
        }
    });

}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/

/*$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); 
*/
