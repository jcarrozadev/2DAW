<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset=UTF-8>
        <meta name=viewport content='width=device-width, initial-scale=1.0'>
        <meta name=author content='Javier Arias Carroza jariasc14@gmail.com'>
        <link rel=icon type=image/x-icon href=/img/favicon.png>
        <title>DWES | Ejercicio Factorial</title>
        <!-- Resto de hojas de estilo CSS -->
        <!-- <link rel=stylesheet href=css/reset.css> -->
        <link rel=stylesheet href=css/factorial.css>
    </head>
    <body>
        <h1>Ejercicio Factorial - Iniciales</h1>
        <p>
            Este ejercicio está creado para practicar inicialmente la introducción de PHP.
            <br>Esta versión es estática.
        </p>
        <?php  
            // $num = 5;
            function factorial($num) {
                $resultado = 1;
                while ( $num > 0 ){
                    $resultado = $resultado * $num;
                    $num--;
                }
                return $resultado;
            }
        ?>
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
                for($i = 1; $i <= 10; $i++) {
                    factorial($i);
                    echo '<tr>
                            <td>
                                '.$i.'
                            </td> 
                            <td>
                                '.factorial($i).'
                            </td>
                        </tr>';
                }
            ?>
            <tr>
                <td colspan=2>Javier Arias Carroza</td>
            </tr>
        </table>
        <!-- Scripts de JS al final del body -->
    </body>
</html>