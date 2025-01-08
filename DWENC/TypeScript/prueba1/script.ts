console.log("Hola mundo mi primer proyecto en TS")

//////////////////// Tipos de datos
const str1: string = "Prueba de String comillas dobles"
const str2: string = 'Prueba de String comillas simples'
const str3: string = `Prueba de String con backticks`

const nombre: string = "Javier"
const apellido: string = "Arias"
const edad: number = 20;

const str4: string = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`

const booleano: boolean = true

/// Creación de objetos

const programador = {
    nombre: "Javier",
    apellido: "Arias",
    edad: 20,
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    viajeAMarte: undefined,
    viajeALaLuna: null
}

// Arrays 

const numeros: number[] = [1, 2, 3, 4, 5]

const nombres: string[] = ["Javier", "Arias", "Lopez"]

const booleanos: boolean[] = [true, false, true]

// Funciones
function suma(a: number, b: number): number {
    return a+b;
}

// Funciones con parámetros opcionales (apellido es opcional)
function saludar(nombre: string, apellido?: string): string {
    if(apellido) {
        return `Hola ${nombre} ${apellido}`
    } else {
        return `Hola ${nombre}`
    }
}

// Funciones con parámetros por defecto
function saludar2(nombre: string, apellido: string = "Arias"): string {
    return `Hola ${nombre} ${apellido}`
}

