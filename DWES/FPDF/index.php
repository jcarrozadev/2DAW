<?php
require_once 'ranking.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Ranking</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <main>
        <div>
            <h1 id="tituloJuego" class="tituloRanking">Ran<span class="king">king</span></h1>
            <div class="ranking-container">
                <table class="ranking">
                    <tr>
                        <td colspan="5"><a href="pdf.php" class="enlace">Ver PDF</a></td>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Tiempo</th>
                        <th>Dinero</th>
                        <th>Personaje</th>
                    </tr>
                    <?php
                        if ($datos) {
                            $isEvenRow = true;
                            foreach ($datos as $fila) {
                                // Alternar el color de fondo de las filas
                                $rowColor = $isEvenRow ? 'background-color: #f0f0f0;' : '';
                                $isEvenRow = !$isEvenRow;

                                echo '<tr style="' . $rowColor . '">';
                                    echo '<td>' . $fila['idJugador'] . '</td>';
                                    echo '<td>' . $fila['nombre'] . '</td>';
                                    echo '<td>' . $fila['tiempoTotal'] . ' hrs</td>';
                                    echo '<td>' . $fila['dineroTotal'] . ' $</td>';
                                    echo '<td>' . $fila['idPersonaje'] . '</td>';
                                echo '</tr>';
                            }
                        } else {
                            echo '<tr><td colspan="5"><p id="noActivas">No hay jugadores en el ranking.</p></td></tr>';
                        }
                    ?>
                </table>
            </div>
        </div>
    </main>
    <script src="js/views/musica.js"></script>
    <script src="js/views/decirNombre.js"></script>
</body>
</html>
