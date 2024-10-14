<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio POO - Básico 2</title>
    <style>
        form {
            margin: 0 auto;
            width: 300px;
            text-align: center;
            padding: 30px;
            border: 2px solid #007BFF;
            border-radius: 15px;
            background-color: #e9ecef;
        }
        input[type="text"] {
            width: 100%;
            margin: 15px 0;
            padding: 10px;
            border: 2px solid #007BFF;
            border-radius: 10px;
        }
        input[type="submit"] {
            padding: 12px 25px;
            border: none;
            border-radius: 10px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <form action="resultado.php" method="POST">
        <label for="">Introduce fecha formato dd/mm/yyyy</label><br>
        <input type="text" name="fecha">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>