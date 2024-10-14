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
        <h1>Ejercicio Factorial - Arrays v1 - Resultados</h1>
        <p>Esto es la primera versión del primer ejercicio de arrays, en el que hay que mostrar del 1 al 10 una tabla de factoriales y guardarla en un array.</p>
        <table>
            <tr>
                <td colspan=2><?php echo 'TABLA DE FACTORIALES DEL 1 AL 10' ?></td>
            </tr>
            <tr>
                <td>
                    Número
                </td>
                <td>
                    Factorial
                </td>
            </tr>
            <?php
                require_once 'guardarArray.php';

                for($i = 1; $i <= 10; $i++) {
                    factorial($i);
                    echo '<tr>
                            <td>
                                '.$i.'
                            </td> 
                            <td>
                                '.$factoriales[$i].'
                            </td>
                        </tr>';
                }
                var_dump($factoriales);
            ?>
            <tr>
                <td colspan=2>Javier Arias Carroza</td>
            </tr>
        </table>
        <!-- Scripts de JS al final del body -->
    </body>
</html>