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
            <br>Por defecto, aparecerá la primera lista de números con sus factoriales del 1 al 10.
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
        <form action="" method="get">
            <fieldset>
                <label for="inicio">Introduce número de inicio: </label>
                <input type="number" name="numero1">
                <div class="separador"></div>
                <label for="final">Introduce número de final: </label>
                <input type="number" name="numero2">
            </fieldset>
            <input type="submit" value="Enviar"></input>
        </form>
        <?php
            $num1 = $_GET['numero1'];
            if ($num1==NULL)
                $num1 = 1;
            $num2 = $_GET['numero2'];
            if ($num2==NULL)
                $num2 = 10;
        ?>
        <table>
            <tr>
                <td colspan=2><?php echo 'TABLA DE FACTORIALES DEL '.$num1.' AL '.$num2.'' ?></td>
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
                for($i = $num1; $i <= $num2; $i++) {
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