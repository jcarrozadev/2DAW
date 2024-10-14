<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset=UTF-8>
        <meta name=viewport content='width=device-width, initial-scale=1.0'>
        <meta name=author content='Javier Arias Carroza jariasc14@gmail.com'>
        <link rel=icon type=image/x-icon href=/img/favicon.png>
        <title>DWES | Ejercicio Factorial v2 Resultado</title>
        <!-- Resto de hojas de estilo CSS -->
        <!-- <link rel=stylesheet href=css/reset.css> -->
        <link rel=stylesheet href=css/factorial.css>
        <style>
            .volver {
                background-color: rgb(97, 158, 223);
                color: white;
                text-decoration: none;
                padding: 10px;
                border-radius:4px;
            }

            .volver:hover {
                background-color: rgb(97, 138, 223);
            }
        </style>
    </head>
    <body>
        <?php
            require_once 'funciones.php';
            for($i = 1; $i <= 10; $i++) {
                $factoriales[$i]=factorial($i);
            }
        ?>
        <!-- Scripts de JS al final del body -->
    </body>
</html>