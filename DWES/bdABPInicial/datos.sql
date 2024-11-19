/* Javier Arias Carroza */

-- Creación de la tabla Administradores
CREATE TABLE Administradores (
    idAdmin TINYINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    correo VARCHAR(50) NOT NULL UNIQUE,
    contrasenia CHAR(20) NOT NULL
);

-- Creación de la tabla Editoriales
CREATE TABLE Editoriales (
    idEditorial SMALLINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL UNIQUE,
    correo VARCHAR(50) NOT NULL UNIQUE,
    telefono CHAR(9) NOT NULL
);

-- Relación (si existiera alguna relación entre estas tablas según el modelo, esta puede ser definida aquí).
-- Por ejemplo, si un administrador está asociado a una editorial:
-- ALTER TABLE Editoriales ADD COLUMN idAdmin TINYINT UNSIGNED, 
-- ADD CONSTRAINT fk_admin_editorial FOREIGN KEY (idAdmin) REFERENCES Administradores(idAdmin);
