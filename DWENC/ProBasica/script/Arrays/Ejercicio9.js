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