<?php
    require_once 'Operaciones.php';
    // echo var_dump($_POST);
    
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operando = $_POST['operando'];

    // echo 'Operando = '.$operando;

    $objOpe1 = new Operaciones();

    echo 'El resultado de la operacion es : '.$objOpe1->operacion($num1,$num2,$operando);

