<?php
    require_once 'configDB.php';
    //Conecta con la base de datos del servidor($conexión)
    $conexion = new mysqli(SERVIDOR, USUARIO, PASSWORD, BBDD); //Conecta con la base de datos
    $conexion->set_charset("utf8"); //Usa juego caracteres UTF8
    //Desactivar errores
    $controlador = new mysqli_driver();
    $controlador->report_mode = MYSQLI_REPORT_OFF;
