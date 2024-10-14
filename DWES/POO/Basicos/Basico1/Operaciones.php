<?php
    /**
    * Clase que valida los datos introducidos en el formulario y calcula la operación
    */
    class Operaciones{

        public function operacion($num1,$num2,$operando){

            if($num2 > $num1){ // Si el segundo número es mayor que el primero, los intercambiamos
                $aux = $num2;
                $num2 = $num1;
                $num1 = $aux;
            }
            
            switch($operando){ // Realizamos la operación según el símbolo que sea
                case '+':
                    return $num1 + $num2;
                    break;
                case '-':
                    return $num1 - $num2;
                    break;
                case '*':
                    return $num1 * $num2;
                    break;
                case '/':
                    return $num1 / $num2;
            }
        }
    }