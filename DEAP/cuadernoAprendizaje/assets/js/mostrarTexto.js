function mostrarTexto(tipo) {
    var texto = '';

    if (tipo === 'directa') {

        texto = 'La resolución <span class="textoDestacable">directa</span> convierte un nombre de dominio en una dirección IP.';
        texto += '<br><br><strong>Ejemplo de Resolución Directa:</strong><br>';
        texto += 'Si ingresamos el dominio <span class="textoDestacable">www.ejemplo.com</span> en el navegador, el servidor DNS lo traducirá a una dirección IP como <span class="textoDestacable">192.168.1.1</span>.<br>';
        texto += 'Este proceso permite que podamos acceder a sitios web utilizando nombres de dominio en lugar de tener que recordar direcciones IP numéricas.';

    } else if (tipo === 'inversa') {

        texto = 'La resolución <span class="textoDestacable">inversa</span> convierte una dirección IP en un nombre de dominio.';
        texto += '<br><br><strong>Ejemplo de Resolución Inversa:</strong><br>';
        texto += 'Si tenemos la dirección IP <span class="textoDestacable">192.168.1.1</span> y queremos saber a qué dominio corresponde, el servidor DNS nos devolverá el nombre de dominio asociado, como <span class="textoDestacable">www.ejemplo.com</span>.<br>';
        texto += 'Este proceso es útil para identificar el nombre de dominio asociado a una dirección IP específica.';
    }

    else if (tipo === 'start') {

        texto = 'El comando <span class="textoDestacable">service apache2 start</span> se utiliza para <span class="textoDestacable">iniciar</span> el servidor web Apache en sistemas basados en Linux.<br>';
        texto += 'Si ejecutamos el comando <span class="textoDestacable">sudo service apache2 start</span> en la terminal, el servidor Apache se iniciará y comenzará a aceptar conexiones entrantes.<br>';
        texto += 'Este proceso es esencial para que el servidor web pueda servir páginas web a los usuarios.';
    }

    else if (tipo === 'stop') {  
        texto = 'El comando <span class="textoDestacable">service apache2 stop</span> se utiliza para <span class="textoDestacable">detener</span> el servidor web Apache en sistemas basados en Linux.<br>';
        texto += 'Si ejecutamos el comando <span class="textoDestacable">sudo service apache2 stop</span> en la terminal, el servidor Apache se detendrá y dejará de aceptar conexiones entrantes.<br>';
        texto += 'Este proceso es útil para realizar tareas de mantenimiento o detener el servidor web temporalmente.';
    }
    else if (tipo === 'restart') {    
        texto = 'El comando <span class="textoDestacable">service apache2 restart</span> se utiliza para <span class="textoDestacable">reiniciar</span> el servidor web Apache en sistemas basados en Linux.<br>';
        texto += 'Si ejecutamos el comando <span class="textoDestacable">sudo service apache2 restart</span> en la terminal, el servidor Apache se reiniciará y volverá a cargar la configuración.<br>';
        texto += 'Este proceso es útil para aplicar cambios en la configuración del servidor web o solucionar problemas de funcionamiento.';
    }
    else if (tipo === 'reload') {
    
        texto = 'El comando <span class="textoDestacable">service apache2 reload</span> se utiliza para <span class="textoDestacable">recargar</span> la configuración del servidor web Apache en sistemas basados en Linux.<br>';
        texto += 'Si ejecutamos el comando <span class="textoDestacable">sudo service apache2 reload</span> en la terminal, el servidor Apache recargará la configuración sin detener el servicio.<br>';
        texto += 'Este proceso es útil para aplicar cambios en la configuración del servidor web sin interrumpir el servicio.';
    }

    document.getElementById('textoExplicativo').innerHTML = texto;

}