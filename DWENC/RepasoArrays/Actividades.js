/* Javier Arias Carroza 2ºDAW */

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];

/**************************
 *      Actividad 1       *
 **************************/

let actividad1 = () => {

    futbolistas.forEach(futbolista => {
        if (futbolista.goles > 20) {
            console.log(futbolista.nombre);
        }
    });

};

/**************************
 *      Actividad 2       *
 **************************/

let actividad2 = () => {

    let suma = 0;

    futbolistas.forEach(futbolista => {
        suma += futbolista.goles;
    });

    console.log(suma);

};

/**************************
 *      Actividad 3       *
 **************************/

let actividad3 = () => {

    futbolistas.sort((a,b) => {
        b.asistencias - a.asistencias;
    });

    console.log(futbolistas);
};

/**************************
 *      Actividad 4       *
 **************************/

let actividad4 = () => {

    // let rojas = 0;
    // let amarillas = 0;

    // futbolistas.forEach(futbolista => {
    //     if (futbolista.tarjetaAmarilla >= 1) {

    //     }
    // });

};

/**************************
 *        Ejecución       *
 **************************/

actividad3();