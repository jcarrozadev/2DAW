window.addEventListener('load', () => {

    let empleados = []; // Array de Objetos

    let datEmpleados = 
        `
12345,Javier Arias Carroza,45,Masculino,Gerente
67890,Pablo Caldito Gomez,33,Masculino,Desarrollador
11223,Levi Josue Candeias de Figueiredo,29,Masculino,Analista
44556,Jose Luis del Valle del Pino,50,Masculino,Contador
33445,David Fariña Morena,40,Masculino,Diseñador
22883,Alvaro Gomez Delgado,31,Masculino,Desarrollador
56789,Fernando Jose Gonzalez Bernaldez,38,Masculino,Consultor
34567,Angel Guiberteau Franco,47,Masculino,Administrador
12333,Paloma Hernandez Sanchez,28,Femenino,Marketing
67676,Miriam Lopez Vega,34,Femenino,Recursos Humanos
99887,Ceus Martin Llera,29,Masculino,Asistente
77665,Celia Moruno Herrojo,32,Femenino,Analista
55665,Ismael Paz Bernal,41,Masculino,Gerente de Proyecto
66778,Mauricio Peña Dominguez,36,Masculino,Auditor
88777,Carlos Rodriguez Botello,45,Masculino,Programador
33211,Alberto Sanchez Diaz,39,Masculino,Ingeniero
99123,David Silva Vega,35,Masculino,Soporte Técnico
78111,Hugo Sanchez Gallardo,28,Masculino,Diseñador
66112,Joaquin Francisco Telo Nuñez,52,Masculino,Director Financiero
11234,Maria Vidigal Barroso,30,Femenino,Contadora
`;

    let division = datEmpleados.split("\n"); // Divisiones por Enter del String

    /*************************************************************** Registro Empleados *******************************************************/
    
    for(let i=1;i<division.length-1;i++) {

        let empleado = division[i].split(",");

        empleados.push({
            ndocumento: empleado[0],
            nombre: empleado[1],
            edad: empleado[2],
            sexo: empleado[3],
            puesto: empleado[4]
        });

    }

    /*************************************************************** Buscar Empleados *******************************************************/

    function buscarEmpleados() {

        let empleadoBuscar = Number(prompt("Numero de documento a buscar: "));

        if (busquedaDocumento(empleadoBuscar)==null) {
            alert("No se ha encontrado documento")
        }
        else {
            alert("Documento encontrado. Revisa F12 para ver el objeto");
            console.log(busquedaDocumento(empleadoBuscar));
        }
    
    }

    function busquedaDocumento(ndocumento) {
        return empleados.find((element) => element.ndocumento == ndocumento);
    }

    /*************************************************************** Agregar Empleados *******************************************************/

    let agregarNuevoEmpleado = () => {

        let ndocumento = prompt("Ingresa Nuevo Numero de Documento: ");
        let nombre = prompt("Ingresa Nuevo Nombre: ");
        let edad = prompt("Ingresa Nueva Edad: "); 
        let sexo = prompt("Ingresa Nuevo Sexo: ");
        let puesto = prompt("Ingresa Nuevo Puesto: ");

        empleados.push({
            ndocumento: ndocumento,
            nombre:nombre,
            edad:edad,
            sexo:sexo,
            puesto:puesto
        })
    };

    /*************************************************************** Borrar Empleados *******************************************************/

    let borrarEmpleados = () => {

        let empleadoBorrar = prompt("¿Qué Número de Documento quieres borrar?");

        let indice = empleados.findIndex(empleados => empleados.ndocumento===empleadoBorrar)

        console.log(indice);

        empleados.splice(indice, 1);

    };

    console.log(empleados);

    //agregarNuevoEmpleado();
    //buscarEmpleados();
    borrarEmpleados();


});