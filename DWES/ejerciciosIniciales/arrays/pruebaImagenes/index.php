<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Arrays | Imágenes</title>
        <link rel="stylesheet" href="css/stylesheet.css">
    </head>
    <body>
        <h1>Arrays - Imágenes v1</h1>
        <p>En este ejercicio se mostrarán imágenes de un array de elementos.</p>
        <?php
            const RUTA = "img/";
            /*********** Guardar datos en array ***********/
            $imagenes = array(
                "foto1" => "foto1.jpeg",
                "foto2" => "foto2.jpeg",
                "foto3" => "foto3.jpeg",
                "foto4" => "foto4.jpeg"
            );
            // $imagenes["foto1"] = "foto1.jpeg";
            // $imagenes["foto2"] = "foto2.jpeg";
            // $imagenes["foto3"] = "foto3.jpeg";
            // $imagenes["foto4"] = "foto4.jpeg";

            /*********** Mostrar imágenes ***********/
            foreach($imagenes as $indice => $valor){
                echo '
                    <figure>
                        <img src="'.RUTA.''.$valor.'" alt="'.$indice.'" width="100%">
                        <figcaption>'.$indice.'</figcaption>
                    </figure>
                ';
            }
        ?>
    </body>
</html>