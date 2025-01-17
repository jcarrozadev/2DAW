<?php
require_once 'conexion.php';
    $sql = 'SELECT * FROM Jugador ORDER BY dineroTotal DESC';

    $resultado = $conexion -> query($sql);

    $datos = [];
    while($fila = $resultado->fetch_assoc()){
        $datos[] = $fila;
    }
?>