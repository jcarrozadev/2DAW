-- Javier Arias Carroza

-- 1. Sacar reconocimientos con los nombres de los alumnos

SELECT 
	ae.nombre AS Envia,
	ar.nombre AS Recibe,
	r.descripcion AS Descripción
FROM reconocimiento AS r
INNER JOIN alumno AS ae 
	ON r.idAlumEnvia = ae.idAlumno
LEFT JOIN alumno AS ar 
	ON r.idAlumRecibe = ar.idAlumno

-- 2. A cada alumno que recibe sólo puede tener un reconocimiento

ALTER TABLE reconocimiento
ADD CONSTRAINT unicoReconocimientoAlumno
UNIQUE (idAlumRecibe);

-- 3. El alumno ya puede recibir más de un reconocimiento

ALTER TABLE reconocimiento
DROP CONSTRAINT unicoReconocimientoAlumno;

-- 4. Mostrar los nombres de los alumnos que no han enviado reconocimientos.

-- Si no existe un reconocimiento para el alumno, no se mostrará
SELECT 
    a.nombre
FROM alumno AS a
WHERE NOT EXISTS (
    SELECT * 
    FROM reconocimiento AS r 
    WHERE r.idAlumRecibe = a.idAlumno
);

-- Todos los alumnos menos el que no tiene reconocimientos
SELECT 
    a.nombre
FROM alumno AS a
WHERE a.idAlumno NOT IN (
    SELECT r.idAlumRecibe 
    FROM reconocimiento AS r
);

-- 5. Mostrar cuantos alumnos han obtenido reconocimiento.

SELECT 
    COUNT(DISTINCT idAlumEnvia) AS 'Alumnos que han enviado reconocimientos'
FROM reconocimiento;

-- 6. Piensa alguna consulta con funciones de agregado (consultas resumen). Pon el enunciado y la solución
-- 7. Puedes añadir más consultas. Pon el enunciado y la solución

-- Mostrar el nombre de los alumnos que envien más de un reconocimiento

SELECT 
    a.nombre AS EnviadosMasDe1
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumEnvia
GROUP BY a.nombre
HAVING COUNT(r.idAlumRecibe) > 1;

-- Mostrar el nombre de los alumnos que hayan enviado entre 1 y 2 reconocimientos

SELECT 
    a.nombre AS EnviadosEntre1y2
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumEnvia
GROUP BY a.nombre
HAVING COUNT(r.idAlumRecibe) BETWEEN 1 AND 2;

-- Mostrar el nombre de los alumnos que no hayan enviado ningún reconocimiento

SELECT 
    a.nombre AS SinEnviarAlumnos
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumEnvia
GROUP BY a.nombre
HAVING COUNT(r.idAlumRecibe) = 0;

-- Mostrar el nombre de los alumnos y el número de reconocimientos que han enviado

SELECT 
    a.nombre,
    COUNT(r.idAlumEnvia) AS 'Reconocimientos enviados'
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumEnvia
GROUP BY a.nombre;

-- Mostrar el nombre de los alumnos y el número de reconocimientos que han recibido

SELECT 
    a.nombre,
    COUNT(r.idAlumRecibe) AS 'Reconocimientos recibidos'
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumRecibe
GROUP BY a.nombre;

-- Mostrar el nombre de los alumnos y el número de reconocimientos que han enviado y recibido

SELECT 
    a.nombre,
    COUNT(r.idAlumEnvia) AS 'Reconocimientos enviados',
    COUNT(r.idAlumRecibe) AS 'Reconocimientos recibidos'
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumEnvia
GROUP BY a.nombre;

-- Mostrar el nombre de los alumnos y el número total de reconocimientos (enviados y recibidos)

SELECT 
    a.nombre,
    (COUNT(r1.idAlumEnvia) + COUNT(r2.idAlumRecibe)) AS 'Total Reconocimientos'
FROM alumno AS a
LEFT JOIN reconocimiento AS r1
    ON a.idAlumno = r1.idAlumEnvia
LEFT JOIN reconocimiento AS r2
    ON a.idAlumno = r2.idAlumRecibe
GROUP BY a.nombre;

-- Mostrar el nombre de los alumnos y la suma de los IDs de los reconocimientos que han enviado

SELECT 
    a.nombre,
    SUM(r.idReconocimiento) AS 'Suma IDs Enviados'
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumEnvia
GROUP BY a.nombre;

-- Mostrar el nombre de los alumnos y la suma de los IDs de los reconocimientos que han recibido

SELECT 
    a.nombre,
    SUM(r.idReconocimiento) AS 'Suma IDs Recibidos'
FROM alumno AS a
LEFT JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumRecibe
GROUP BY a.nombre;

-- Mostrar el nombre de los alumnos y el promedio de los IDs de los reconocimientos que han enviado

SELECT 
    a.nombre,
    AVG(r.idReconocimiento) AS 'Promedio IDs Enviados'
FROM alumno AS a
INNER JOIN reconocimiento AS r
    ON a.idAlumno = r.idAlumEnvia
GROUP BY a.nombre;
