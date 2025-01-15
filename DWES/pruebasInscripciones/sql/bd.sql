CREATE DATABASE pruebasInscripciones;

USE pruebasInscripciones;

CREATE TABLE Pruebas(
    idPrueba TINYINT UNSIGNED AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    CONSTRAINT pk_pruebas PRIMARY KEY (idPrueba)
);

CREATE TABLE Alumnos(
    idAlumno TINYINT UNSIGNED AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    idClase CHAR(5) NOT NULL,
    CONSTRAINT pk_alumnos PRIMARY KEY (idAlumno)
);
 
CREATE TABLE Inscripciones(
    idInscripcion TINYINT UNSIGNED AUTO_INCREMENT,
    idAlumno TINYINT UNSIGNED NOT NULL,
    idPrueba TINYINT UNSIGNED NOT NULL,
    CONSTRAINT pk_inscripciones PRIMARY KEY (idInscripcion),
    CONSTRAINT fk_inscripciones_alumnos FOREIGN KEY (idAlumno) REFERENCES Alumnos(idAlumno),
    CONSTRAINT fk_inscripciones_pruebas FOREIGN KEY (idPrueba) REFERENCES Pruebas(idPrueba),
    CONSTRAINT csu_inscripciones_alumnos UNIQUE (idAlumno)
);