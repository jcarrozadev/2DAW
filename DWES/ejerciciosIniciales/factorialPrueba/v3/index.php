<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset=UTF-8>
        <meta name=viewport content='width=device-width, initial-scale=1.0'>
        <meta name=author content='Javier Arias Carroza jariasc14@gmail.com'>
        <link rel=icon type=image/x-icon href=/img/favicon.png>
        <title>DWES | Ejercicio Factorial v2</title>
        <!-- Resto de hojas de estilo CSS -->
        <!-- <link rel=stylesheet href=css/reset.css> -->
        <link rel=stylesheet href=css/factorial.css>
    </head>
    <body>
        <h1>Ejercicio Factorial - Iniciales v3</h1>
        <p>
            Este ejercicio está creado para practicar inicialmente la introducción de PHP.
            <br>Introduce datos para averiguar el factorial en un rango.  
        </p>

        <form action="factorial.php" method="post">
            <fieldset>
                <label for="inicio">Introduce número de inicio: </label>
                <input type="number" name="numero1">
                <div class="separador"></div>
                <label for="final">Introduce número de final: </label>
                <input type="number" name="numero2">
            </fieldset>
            <input type="submit" value="Enviar"></input>
        </form>
        <!-- Scripts de JS al final del body -->
    </body>
</html>