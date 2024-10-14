
<?php
    require_once 'DiasAño.php';

    $fecha = explode('/',$_POST['fecha']);
    $dia = $fecha[0];
    $mes = intval($fecha[1]); // Lo pasamos a entero para que no de problemas con el array (en caso de poner 02 se iría al 2º elemento)
    $año = $fecha[2];

    $objDiasAño = new DiasAño($año);
    // print_r($objDiasAño->mesesDias);

    echo 'La fecha introducida es: '.$dia.' de '.$objDiasAño->getMesesDias($mes)['mes'].' de '.$año.'
                <br> Febrero tiene: '.$objDiasAño->getMesesDias(2)['dias'].' dias';
?>



