"use strict";
console.log("Hola mundo mi primer proyecto en TS");
//////////////////// Tipos de datos
const str1 = "Prueba de String comillas dobles";
const str2 = 'Prueba de String comillas simples';
const str3 = `Prueba de String con backticks`;
const nombre = "Javier";
const apellido = "Arias";
const edad = 20;
const str4 = `Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`;
const booleano = true;
/// Creación de objetos
const programador = {
    nombre: "Javier",
    apellido: "Arias",
    edad: 20,
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    viajeAMarte: undefined,
    viajeALaLuna: null
};
// Arrays 
const numeros = [1, 2, 3, 4, 5];
const nombres = ["Javier", "Arias", "Lopez"];
const booleanos = [true, false, true];
// Funciones
function suma(a, b) {
    return a + b;
}
// Funciones con parámetros opcionales (apellido es opcional)
function saludar(nombre, apellido) {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`;
    }
    else {
        return `Hola ${nombre}`;
    }
}
// Funciones con parámetros por defecto
function saludar2(nombre, apellido = "Arias") {
    return `Hola ${nombre} ${apellido}`;
}
