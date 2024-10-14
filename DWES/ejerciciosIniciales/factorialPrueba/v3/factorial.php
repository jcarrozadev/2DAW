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
                background-color: var(--color);
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
        <?php require_once 'funciones.php' ?>
        <h1>Ejercicio Factorial - Iniciales v3 - Resultados</h1>
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
        <a href="index.php" class="volver">
            Volver atrás
        </a>
        <!-- Scripts de JS al final del body -->
    </body>
</html>