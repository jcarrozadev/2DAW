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

/*
- ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles
*/

const jugadoresMasGoles = futbolistas.filter(jugador => jugador.goles > 20);

//console.log(jugadoresMasGoles);

/*
- ACT 2 - Obtener el total de goles de todos los jugadores
*/ 

const totalGolesJugadores = futbolistas.reduce((total,jugador) => total + jugador.goles, 0);

//console.log(totalGolesJugadores);

// function totalGolesTodosJugadores(){
//     let totalGoles = 0;
//     for(let i = 0; i < futbolistas.length; i++){
//         totalGoles += futbolistas[i].goles;
//     }
//     console.log("La suma total de todos los goles es de " + totalGoles);
// }

// totalGolesTodosJugadores();

/*
- ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)
*/

const ordenacionAsistencias = () => {

    const jugadores = [...futbolistas];

    const ordenacionJugadores = jugadores.sort((a,b) => b.asistencias - a.asistencias);

    console.log("--------- Jugadores Ordenados por Asistencias de Mayor a Menor -------");
    console.log(ordenacionJugadores);

};

//ordenacionAsistencias();

/*
- ACT 4 - Contar tarjetas rojas y amarillas por equipo
*/

function calcularTarjetasPorEquipo() {
    const tarjetasPorEquipo = {};

    for (let i = 0; i < futbolistas.length; i++) {
        const jugador = futbolistas[i];
        const totalTarjetas = jugador.tarjetaAmarilla + jugador.tarjetaRoja;

        // Si el equipo ya existe en el objeto, sumamos las tarjetas
        if (tarjetasPorEquipo[jugador.equipo]) {
            tarjetasPorEquipo[jugador.equipo] += totalTarjetas;
        } else {
            // Si el equipo no existe, lo iniciamos con el total de tarjetas
            tarjetasPorEquipo[jugador.equipo] = totalTarjetas;
        }
    }

    return tarjetasPorEquipo;
}

console.log("Tarjetas por equipo:", calcularTarjetasPorEquipo());


/*
- ACT 5 - Obtener el promedio de goles por partido para cada jugador
*/

const promedioPartidoJugador = () => {

    

};

/*
- ACT 6 - Encontrar el jugador con más asistencias
*/

const jugadorMasAsistencias = () => {

    let jugadorMayor = futbolistas[0];

    for(let i = 0; i < futbolistas.length; i++) {

        if (futbolistas[i].asistencias > jugadorMayor.asistencias) {
            jugadorMayor = futbolistas[i];
        }

    }

    console.log("El jugador con más asistencias es "+jugadorMayor.nombre+" con "+jugadorMayor.asistencias+" asistencias");

};

//jugadorMasAsistencias();

/*
- ACT 7 - Listar los nombres de los jugadores por posición
*/

const jugadoresPorPosicion = () => {



};