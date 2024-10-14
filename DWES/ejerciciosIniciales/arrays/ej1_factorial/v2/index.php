<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset=UTF-8>
        <meta name=viewport content='width=device-width, initial-scale=1.0'>
        <meta name=author content='Javier Arias Carroza jariasc14@gmail.com'>
        <!-- <link rel=icon type=image/x-icon href=/img/favicon.png> -->
        <title>DWES | Ejercicio Factorial v2 Resultado</title>
        <!-- Resto de hojas de estilo CSS -->
        <!-- <link rel=stylesheet href=css/reset.css> -->
        <link rel=stylesheet href=css/factorial.css>
    </head>
    <body>
        <h1>Ejercicio Factorial - Arrays v2 - Introducir</h1>
        <p>Esto es la segunda versión del primer ejercicio de arrays, en el que hay que introducir dinamicamente una tabla de factoriales y guardarla en un array.</p>
        <form action="guardarArray.php" method="post">
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