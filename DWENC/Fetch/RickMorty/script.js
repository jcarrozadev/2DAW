/** Javier Arias Carroza */
/**
 * 
 * Este ejercicio sirve para tratar "fetch" y utilizar una API.
 * 
 */

const urlRick = 'https://rickandmortyapi.com/api/character?authuser=0';


function visualizarPersonajes () {
    volver();
    fetch(urlRick)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(imagen => {
            document.write('<img src="'+ imagen.image +'">');
        });
    }); // Me devuelve un objeto
    
}

function volver() {
    document.write('<div id="volver" style="margin-bottom:1%;"><button><a href="index.html" style="color:black;text-decoration:none;">Ocultar Personajes</a></button></div>');
}