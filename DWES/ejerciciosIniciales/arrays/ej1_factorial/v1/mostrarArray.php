<!-- Javier Arias Carroza -->
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset=UTF-8>
        <meta name=viewport content='width=device-width, initial-scale=1.0'>
        <meta name=author content='Javier Arias Carroza jariasc14@gmail.com'>
        <link rel=icon type=image/x-icon href=/img/favicon.png>
        <title>DWES | Ejercicio Factorial v1 Resultado</title>
        <!-- Resto de hojas de estilo CSS -->
        <!-- <link rel=stylesheet href=css/reset.css> -->
        <link rel=stylesheet href=css/factorial.css>
    </head>
    <body>
        <h1>Ejercicio Factorial - Arrays v1 - Resultados</h1>
        <p>Esto es la primera versión del primer ejercicio de arrays, en el que hay que mostrar del 0 al 10 una tabla de factoriales y guardarla en un array.</p>
        <table>
            <tr>
                <td colspan=2><?php echo 'TABLA DE FACTORIALES DEL 0 AL 10' ?></td>
            </tr>
            <tr>
                <td>
                    Número
                </td>
                <td>
                    Factorial
                </td>
            </tr>
            <!-- Mostrar factoriales (datos del array) en formato html -->
            <?php
                require_once 'guardarArray.php';

                print_r($factoriales);
                foreach($factoriales as $i => $valor){
                    echo '<tr>
                            <td>
                                '.$i.'
                            </td> 
                            <td>
                                '.$valor.'
                            </td>
                        </tr>';
                } 

                // for($i = 0; $i <= count($factoriales)-1; $i++) {
                //     echo '<tr>
                //             <td>
                //                 '.$i.'
                //             </td> 
                //             <td>
                //                 '.$factoriales[$i].'
                //             </td>
                //         </tr>';
                // }

            ?>
            <tr>
                <td colspan=2>Javier Arias Carroza</td>
            </tr>
        </table>
        <!-- Scripts de JS al final del body -->
    </body>
</html>