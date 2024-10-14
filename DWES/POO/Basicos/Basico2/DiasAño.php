<?php
    /**
     * Clase que calcula los días de cada mes de un año
     */
    class DiasAño{

        private $mesesDias;

        function __construct($año) {
            $this->mesesDias = array(
                1 => array(
                    "mes" => "Enero",
                    "dias" => 31
                ),
                2 => array(
                    "mes" => "Febrero",
                    "dias" => $this->calcularBisiesto($año) ? 29 : 28 // Si es bisiesto, febrero tiene 29 días
                ),
                3 => array(
                    "mes" => "Marzo",
                    "dias" => 31
                ),
                4 => array(
                    "mes" => "Abril",
                    "dias" => 30
                ),
                5 => array(
                    "mes" => "Mayo",
                    "dias" => 31
                ),
                6 => array(
                    "mes" => "Junio",
                    "dias" => 30
                ),
                7 => array(
                    "mes" => "Julio",
                    "dias" => 31
                ),
                8 => array(
                    "mes" => "Agosto",
                    "dias" => 31
                ),
                9 => array(
                    "mes" => "Septiembre",
                    "dias" => 30
                ),
                10 => array(
                    "mes" => "Octubre",
                    "dias" => 31
                ),
                11 => array(
                    "mes" => "Noviembre",
                    "dias" => 30
                ),
                12 => array(
                    "mes" => "Diciembre",
                    "dias" => 31
                )
            );
        }

        private function calcularBisiesto($año){
            return ($año % 4 == 0 && ($año % 100 != 0 || $año % 400 == 0));
        }

        public function getMesesDias($mes){
            return $this->mesesDias[$mes];
        }
    }