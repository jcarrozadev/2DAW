document.getElementById('miFormulario').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
  
    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;
  
    // Crea un objeto con los datos del formulario
    const formData = new FormData();
    formData.append('usuario', usuario);
    formData.append('contrasenia', contrasenia);

    try {
      const response = await fetch('./php/procesar.php', {
        method: 'POST',
        body: formData,
      });
  
      // Verifica si la respuesta del servidor es exitosa
      if (response.ok) {
        const result = await response.text(); // Cambiar a .json() si el backend envía JSON
        document.getElementById('resultado').innerText = `Respuesta del servidor: ${result}`;
      } 
      else {
        document.getElementById('resultado').innerText = 'Error al enviar los datos';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('resultado').innerText = 'Error de conexión';
    }
  });
  