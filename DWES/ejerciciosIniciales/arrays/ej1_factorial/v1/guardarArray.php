<!-- Javier Arias Carroza -->
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset=UTF-8>
        <meta name=viewport content='width=device-width, initial-scale=1.0'>
        <meta name=author content='Javier Arias Carroza jariasc14@gmail.com'>
        <!-- <link rel=icon type=image/x-icon href=/img/favicon.png> -->
        <title>DWES | Ejercicio Factorial v1 Funciones</title>
        <!-- Resto de hojas de estilo CSS -->
        <!-- <link rel=stylesheet href=css/reset.css> -->
        <link rel=stylesheet href=css/factorial.css>
    </head>
    <body>
        <!-- Guardar en array factoriales del 0 al 10 -->
        <?php
            require_once 'funciones.php';
            for($i = 0; $i <= 10; $i++) {
                $factoriales[$i]=factorial($i);
            }
        ?>
        <!-- Scripts de JS al final del body -->
    </body>
</html>