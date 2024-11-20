<?php

    require_once '../config/conectar.php';

    // Verificar si se enviaron los datos
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $usuario = $_POST['usuario'] ?? '';
        $contrasenia = $_POST['contrasenia'] ?? '';

        $password = mysqli_real_escape_string($conexion, $contrasenia);
    
        if (isset($usuario) && isset($contrasenia)) {
    
            $sql = 'SELECT * FROM usuarios WHERE usuario="'.$usuario.'" AND contrasenia="'.$contrasenia.'"';
            $resultado = $conexion->query($sql);
    
            if ($resultado->num_rows > 0) {
                $fila = $resultado->fetch_assoc(); //Devuelve la fila
                echo 'El usuario es '.$fila['rol'].'';
            }
            else {
                echo 'El usuario introducido no se ha encontrado';
            }
    
        } else {
            echo 'No está rellenado';
        }

    }
