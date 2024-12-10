<?php

    $num = $_GET['numero']; // Recogemos el número introducido
    //$cuadrado = $num * $num; // Calculamos el cuadrado

    /**
     * Función para calcular si es par o impar, si el resto es igual a 0 devolverá verdadero (par) y si no devolverá falso (impar)
     */
    function calcularParImpar($num, &$cuadrado) {
        $cuadrado = $num * $num; // Calculamos el cuadrado
        return $num % 2 == 0; // Devolvemos true si es par, false si es impar
    }
    // function calcularParImpar($num) {
    //     if ($num % 2 == 0) {
    //         return true;
    //     } else {
    //         return false;

    //     }
    // }

    // Llamamos y comprobamos si es par o impar y redirige según el caso
    if (calcularParImpar($num, $cuadrado)) 
        header("Location:par.php?numero=$num&cuadr=$cuadrado");
    else 
        header("Location:impar.php?numero=$num&cuadr=$cuadrado");

?>