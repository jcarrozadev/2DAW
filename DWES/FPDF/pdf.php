<?php
require_once 'ranking.php';
require('fpdf.php');

// Crear una instancia de FPDF
$pdf = new FPDF('P', 'mm', 'A4');

// Añadir una página
$pdf->AddPage();

// Título del documento
$pdf->SetFont('Arial', 'B', 16);
$pdf->Cell(0, 10, 'Ranking de Jugadores', 0, 1, 'C');

// Espacio antes de la tabla
$pdf->Ln(10);

// Configurar encabezado de la tabla
$pdf->SetFont('Arial', 'B', 12);
$pdf->SetFillColor(0, 51, 102); // Azul oscuro
$pdf->SetTextColor(255, 255, 255); // Blanco

// Encabezados
$pdf->Cell(20, 10, 'ID', 1, 0, 'C', true);
$pdf->Cell(50, 10, 'Nombre', 1, 0, 'C', true);
$pdf->Cell(30, 10, 'Tiempo', 1, 0, 'C', true);
$pdf->Cell(40, 10, 'Dinero', 1, 0, 'C', true);
$pdf->Cell(30, 10, 'Personaje', 1, 1, 'C', true);

// Restaurar el color del texto para el contenido
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 10);

// Llenar la tabla con los datos
if ($datos) {
    $isEvenRow = true;
    foreach ($datos as $fila) {
        // Alternar color de fondo
        if ($isEvenRow) {
            $pdf->SetFillColor(240, 240, 240); // Gris claro
        } else {
            $pdf->SetFillColor(255, 255, 255); // Blanco
        }

        $isEvenRow = !$isEvenRow;

        // Agregar una fila con los datos
        $pdf->Cell(20, 10, $fila['idJugador'], 1, 0, 'C', true);
        $pdf->Cell(50, 10, $fila['nombre'], 1, 0, 'C', true);
        $pdf->Cell(30, 10, $fila['tiempoTotal'] . ' hrs', 1, 0, 'C', true);
        $pdf->Cell(40, 10, $fila['dineroTotal'] . ' $', 1, 0, 'C', true);
        $pdf->Cell(30, 10, $fila['idPersonaje'], 1, 1, 'C', true);
    }
} else {
    // Mensaje si no hay datos
    $pdf->Cell(0, 10, 'No hay jugadores en el ranking.', 1, 1, 'C');
}

// Generar el PDF y enviarlo al navegador
$pdf->Output();
?>
