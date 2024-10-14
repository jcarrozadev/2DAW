<!-- Javier Arias Carroza -->
<?php
    function factorial($num) {
        $resultado = 1;
        while ( $num > 0 ){
            $resultado = $resultado * $num;
            $num--;
        }
        return $resultado;
    }
?>