'use strict'

console.log('Cargado')
console.log(datosEntrada)

const arrayDatosEntrada = parsear(datosEntrada)
const numDatosEntrada = arrayDatosEntrada.length

for (let i = 0; i < numDatosEntrada; i++) {
    const numLegionarios = Number(arrayDatosEntrada[i])
    const numEscudos = calcularEscudos(numLegionarios)
    console.log('Legionarios: '+numLegionarios, 'Escudos: '+numEscudos)
}

function parsear (datos) {
    return datos.split('\n')
}

// function calcularEscudos(numLegionarios) {

//     for (let i = 0; i < )

// }

function calcularEscudos1(numLegionarios) {
    if (numLegionarios >= 25)
        return 45 + calcularEscudos(numLegionarios-25) 
    if (numLegionarios >= 16)
        return 32 + calcularEscudos(numLegionarios-16) 
    if (numLegionarios >= 9)
        return 21 + calcularEscudos(numLegionarios-9) 
    if (numLegionarios >= 4) 
        return 12 + calcularEscudos(numLegionarios-4)
    return numLegionarios*5
}