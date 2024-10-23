window.onload = () => {

    let empleados = [];

    function cargarDatos(data) {
        let division = data.split("\n"); // Divisiones por Enter del String
        
        for(let i=0;i<division.length;i++) {
    
            let empleado = division[i].split(",");
    
            empleados.push({
                ndocumento: empleado[0],
                nombre: empleado[1],
                edad: empleado[2],
                sexo: empleado[3],
                puesto: empleado[4]
            });
        }
        
        return empleados;
    }

    function mostrarEmpleados(empleados) {
        
        console.log(empleados);
    }

    function cargarDatosConFetch() {
        fetch('./assets/empleados2DAW.txt')
            .then(response => {

                if (!response.ok) {
                    throw new Error("Error al cargar el archivo");
                }

                return response.text(); //Leemos el archivo como texto

            }) 
            .then(data => {
                //Convertimos los datos a objetos
                empleados = cargarDatos(data);

                mostrarEmpleados(empleados);
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    cargarDatosConFetch();

};