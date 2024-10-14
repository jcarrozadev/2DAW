<?php
    // Recogemos los datos del formulario en variables
    // $nombre = $_POST['nombre'];
    // $apellidos = $_POST['apellidos'];
    // $fechaNacimiento = $_POST['fecha_nacimiento'];
    // $sexo = $_POST['sexo'];
    // $tipo_desastre = $_POST['tipo_desastre'];
    // $notas = $_POST['notas'];
    // $terminos = $_POST['terminos'];
    // $financiacion = $_POST['financiacion'];

    // Guardamos los datos del formulario en un array (se podría resumir con los datos directamente _POST)
    $datosFormulario = array(
        'nombre' => !empty($_POST['nombre']) ? $_POST['nombre'] : null,
        'apellidos' => !empty($_POST['apellidos']) ? $_POST['apellidos'] : null,
        'fechaNacimiento' => !empty($_POST['fecha_nacimiento']) ? $_POST['fecha_nacimiento'] : null,
        'sexo' => isset($_POST['sexo']) ? $_POST['sexo'] : null,
        'tipoDesastre' => isset($_POST['tipo_desastre']) ? $_POST['tipo_desastre'] : null,
        'notas' => $_POST['notas'],
        'terminos' => isset($_POST['terminos']) ? $_POST['terminos'] : null,
        'financiacion' => isset($_POST['financiacion']) ? $_POST['financiacion'] : null,
    );

    // Comprobamos que el array existe y si no existe devolvemos un array vacío
    $notificaciones = isset($_POST['notificaciones']) ? $_POST['notificaciones'] : [];

    // print_r($datosFormulario);

    // Mostramos los datos del formulario 
    foreach ($datosFormulario as $indice => $valor) {
        echo $indice . ': ' . $valor . '<br>';
    }

    echo '<br>';

    foreach ($notificaciones as $indice => $valor) {
        echo $indice . ': ' . $valor . '<br>';
    }

?>
