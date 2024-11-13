let texto = document.querySelector('gitPlantilla').textContent.replace(/\t/g, '').replace(/\n\s*/g, '');
const copiarContenido = async () => {
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Contenido copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}


function buscarEnDetalles(idDetails) {
    // Selecciona el <details> específico en el que queremos buscar
    let detalles = document.getElementById(idDetails);
    
    // Selecciona el campo de entrada dentro del <details>
    let input = detalles.querySelector('.buscarInput').value.toLowerCase();
    
    // Busca todas las etiquetas <p> dentro del details
    let parrafos = detalles.querySelectorAll('p');
    
    let encontrado = false; // Bandera para determinar si hemos encontrado la palabra

    parrafos.forEach(parrafo => {
      let texto = parrafo.innerText.toLowerCase();
      
      // Resalta el texto que coincide
      if (texto.includes(input)) {
        parrafo.style.backgroundColor = 'yellow'; // Resaltar el resultado
        parrafo.style.color = 'black'; // Cambiar el color del texto
        
        // Desplazar hasta el primer resultado encontrado
        if (!encontrado) {
          parrafo.scrollIntoView({ behavior: 'smooth', block: 'center' });
          encontrado = true; // Solo desplazar al primer resultado
        }
      } else {
        parrafo.style.backgroundColor = ''; // Restablece el estilo si no coincide
        parrafo.style.color = ''; // Restablece el color original
      }
    });
    
    if (!encontrado) {
      alert("No se encontró el término buscado en este detalle.");
    }
}
