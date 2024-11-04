const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Orlando City", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "LA Galaxy", goles: 2, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "New York Red Bulls", goles: 0, asistencias: 0, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Al Hilal", goles: 1, asistencias: 0, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Al Shabab", goles: 2, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Al Ahli", goles: 0, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: true }
        ]
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        partidosJugados: [
            { rival: "Liverpool", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Chelsea", goles: 0, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Manchester United", goles: 0, asistencias: 3, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el total de goles y asistencias de cada jugador: Usa map() y reduce() para calcular el total de goles y asistencias de cada jugador en sus partidos.
 */

const totalGolesAsistencias = futbolistas.map(jugador => {

    const totalJugador = jugador.partidosJugados.reduce((total,partido) => {
        
        return {
            goles: total.goles + partido.goles,
            asistencias: total.asistencias + partido.asistencias
        };

    }, {goles: 0, asistencias: 0});

    return {
        nombre: jugador.nombre,
        ...totalJugador
    }

});

//console.log(totalGolesAsistencias);

// Ordenarlo por goles

const ordenarTotalGoles = () => {

    total = [...totalGolesAsistencias]; //Copiar array 
    
    total.sort((a,b) => a.goles - b.goles);

    console.log(total);
};

//ordenarTotalGoles();

// Ordenarlo por asistencias

const ordenarTotalAsistencias = () => {

    total = [...totalGolesAsistencias];

    total.sort((a,b) => b.asistencias - a.asistencias); // de mayor a menor

    console.log(total);

};

//ordenarTotalAsistencias();

/**
 * ACT 2 - EXTRA: Filtrar jugadores con tarjetas rojas en algún partido: Encuentra a los jugadores que hayan recibido al menos una tarjeta roja en algún partido.
 */

const jugadorTarjetasRojas = futbolistas.map(jugador => {

    const total = jugador.partidosJugados.reduce((total,partido) => {

        if (partido.tarjetaRoja)
            return {
                tarjetaRoja: "Si"
            }
        else {
            return {
                tarjetaRoja: "No"
            }
        }

    });

    return {
        nombre: jugador.nombre,
        ...total
    };

});

const filtradoTarjetasRojas2 = futbolistas.map(jugador => {

    const total = jugador.partidosJugados.reduce((total,partido) => {

        if (partido.tarjetaRoja) {
            return true;
        }

    });

    if (total) {
        return {
            nombre: jugador.nombre,
            tarjetaRoja: "Si"
        }
    }

}); //Errorrrrr

const filtradoTarjetasRojas = futbolistas.map(jugador => {
    const tieneTarjetaRoja = jugador.partidosJugados.some(partido => partido.tarjetaRoja); //Para averiguar si ese jugador tiene en algun partido tarjeta Roja, en caso de que sí, devuelve true

    if (tieneTarjetaRoja) {
        return {
            nombre: jugador.nombre,
            tarjetaRoja: "Sí"
        };
    }
    
}).filter(jugador => jugador !== undefined); // Filtrar los jugadores sin tarjeta roja



//console.log(filtradoTarjetasRojas);

/**
 * ACT 3 - EXTRA: Listar los rivales en los que un jugador específico anotó: Pide el nombre de un jugador y, si existe en el array, devuelve una lista de los equipos rivales contra los que anotó.
 */

const listarRivalesJugador = () => {
    const jugador = "Lionel Messi";

    const jugadorDatos = futbolistas.find(futbolista => futbolista.nombre === jugador);

    if (jugadorDatos) {
        const resultados = jugadorDatos.partidosJugados.reduce((total, partido) => {

            if (partido.goles > 0 || partido.asistencias > 0) {

                total.rivales.push(partido.rival);
                total.goles += partido.goles;
                total.asistencias += partido.asistencias;

            }

            return total;

        }, { rivales: [], goles: 0, asistencias: 0 });

        return {
            nombre: jugador,
            ...resultados
        };
    }

    return 'No existe jugador así';
};

//console.log(listarRivalesJugador());


/**
 * ACT 4 - EXTRA: Calcular el promedio de tarjetas amarillas por jugador en sus partidos: Calcula el promedio de tarjetas amarillas recibidas en los partidos para cada jugador.
 */

const promedioAmarillasPorJugador = futbolistas.map(jugador => {

    const totalAmarillas = jugador.partidosJugados.reduce((total, partido) => total + (partido.tarjetaAmarilla ? 1 : 0), 0);

    const promedio = totalAmarillas / jugador.partidosJugados.length;

    return { 
        nombre: jugador.nombre, 
        promedioAmarillas: promedio 
    };
});

console.log(promedioAmarillasPorJugador);

/**
 * ACT 5 - EXTRA: Contar los jugadores con al menos un gol en todos sus partidos: Filtra los jugadores que hayan anotado al menos un gol en cada uno de sus partidos.
 */

/*
const jugadoresConGol = futbolistas.filter(jugador => 
    jugador.partidosJugados.every(partido => partido.goles > 0)
);
*/

const jugadoresSiempreAnotan = futbolistas.filter(jugador => 
    jugador.partidosJugados.every(partido => partido.goles > 0)
);
//console.log(jugadoresSiempreAnotan);

//act5();

function act5(){
    for(let i = 0; i < futbolistas.length; i++){

        let contadorGolEnTodosPartidos = 0;

        for(let j = 0; j < futbolistas[i].partidosJugados.length; j++){

            if(futbolistas[i].partidosJugados[j].goles > 0){
                 contadorGolEnTodosPartidos++;
            }
            
        }

        if(contadorGolEnTodosPartidos == futbolistas[i].partidosJugados.length){
            console.log("El futbolista " + futbolistas[i].nombre + " ha anotado gol en todos sus partidos disputados");
        }
    }
}

