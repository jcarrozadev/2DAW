<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>¡Numero Impar!</title>
        <style>
            body {
                text-align:center;
                background-color: tomato;
            }
            table {
                margin: 0 auto;
                width: 50%;
                border-collapse: collapse;
            }
            th {
                font-size: 1.5em;
                color: white;
                padding: 2%;
            }
            td{
                font-size: 1.2em;
                text-align:center;
            }
            tr,td {
                margin: 1%;
                padding:1%;
            }
            tr,th,td {
                border: 1px solid black;
                padding:5%;
            }
        </style>
    </head>
    <body>
        <h1>¡El número es impar!</h1>
        <table>
            <tr>
                <th>
                    Número: 
                </th>
                <th>
                    Cuadrado:
                </th>
                <th>
                    Paridad:
                </th>
            </tr>
            <tr>
                <?php
                    echo '
                        <td>
                            '.$_GET['numero'].'
                        </td>
                        <td>
                            '.$_GET['cuadr'].'
                        </td>
                        <td>
                            Impar
                        </td>
                    ';
                ?>
            </tr>
        </table>
    </body>
</html>