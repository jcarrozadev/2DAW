////// INTERFACES

// Interfaz basica

interface Persona {
    nombre: string;
    edad: number;
}

// Interfaz con propiedades opcionales

interface Persona2 {
    nombre: string;
    edad?: number;
}

// Interfaz con propiedades de solo lectura

interface Persona3 {
    readonly nombre: string;
    readonly edad: number;
}

// Interfaz con funciones

interface Comparador {
    (a:number,b:number): boolean;
}

interface Persona4 {
    nombre: string;
    edad: number;
    saludar(): void;
}
