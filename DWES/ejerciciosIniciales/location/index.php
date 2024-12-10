<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Numero Cuadrado</title>
        <style>
            h1,form {
                text-align:center;
            }
            form {
                margin-top: 2%;
            }
            input[type="submit"] {
                display: block;
                margin: 1% auto;
                background-color: lightgreen;
                border: 2px solid green;
                padding: 0.5%;
            }
            input[type="submit"]:hover {
                cursor:pointer;
                background-color: lightblue;
            }
        </style>
    </head>
    <body>
        <h1>Calcular el cuadrado y si es par-impar</h1>
        <form action="calcular.php" method="get">
            <label for="num">Introduce numero a calcular: </label>
            <input type="number" name="numero">
            <input type="submit" value="Enviar">
        </form>
    </body>
</html>