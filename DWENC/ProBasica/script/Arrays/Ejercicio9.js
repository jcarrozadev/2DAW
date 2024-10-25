/**
 * 9. Realizar el siguiente ejercicio utilizando Arrays asociativo.
    En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
    corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
    datos debe finalizar al ingresar un valor negativo en el número de cuenta.
    Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

    a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
    según su saldo, sabiendo que:
    Estado de la cuenta 'Acreedor' si el saldo es >0.
    'Deudor' si el saldo es <0.
    'Nulo' si el saldo es =0.

    b) La suma total de los saldos acreedores.
 */

window.addEventListener('load', () => {
    
    let cuentas = [];

    function ingresoCuentas() {

        while(true) {

            let ncuenta = Number(prompt("Ingresa numero de cuenta o 0 para finalizar"));

            if (ncuenta == 0) {
                break;
            } 

            let nombre = Number(prompt("Ingresa nombre del cliente"));

            let saldo = Number(prompt("Ingresa saldo del cliente"));

            cuentas.push ( {
                nombre_cuenta: ncuenta,
                nombre_cliente: nombre,
                saldo_cliente: saldo,
                estado_Cuenta:estadoCuenta(saldo),
            });

        }
        
        acreedor();

    }

    function estadoCuenta(saldo) {
        if (saldo > 0) return "Acreedor";
        if (saldo < 0) return "Deudor";
        return "Nulo";
    }

    function acreedor() {

        let contadorAcreedores = 0;

        cuentas.forEach(indice => {
            
            if (indice.estado_Cuenta == "Acreedor") { contadorAcreedores++; };

        });

        console.log (
            "------------------------------------------------------------------",
            "La suma de acreedores es: "+contadorAcreedores,
            "------------------------------------------------------------------"
        );

    }

    ingresoCuentas();

});