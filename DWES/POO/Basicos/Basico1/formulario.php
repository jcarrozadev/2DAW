<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio POO - Básico 1</title>
    <style>
        form {
            margin: 0 auto;
            width: 300px;
            text-align: left;
            padding: 30px;
            border: 2px solid #000;
            border-radius: 15px;
            background-color: #e0e0e0;
        }

        input[type="number"] {
            width: calc(100% - 20px);
            margin: 10px 0;
            border: 2px solid #000;
            border-radius: 10px;
            padding: 5px;
        }

        input[type="submit"] {
            padding: 15px 30px;
            border: none;
            border-radius: 10px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        select {
            width: 100%;
            margin: 10px 0;
            border: 2px solid #000;
            border-radius: 10px;
            padding: 5px;
        }

    </style>
</head>
<body>
    <form action="resultado.php" method="POST">
        <label for="">Introduce Numero 1</label><br>
        <input type="number" name="num1">
        <label for="">Introduce Numero 2</label><br>
        <input type="number" name="num2">
        <select name="operando">
            <option value="+"> Suma </option>
            <option value="-"> Resta </option>
            <option value="*"> Multiplicacion </option>
            <option value="/"> Division </option>
        </select>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>