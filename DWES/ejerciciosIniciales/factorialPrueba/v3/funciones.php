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
    $num1 = $_POST['numero1'];
    if ($num1==NULL)
        $num1 = 1;
    $num2 = $_POST['numero2'];
    if ($num2==NULL)
        $num2 = 10;
?>