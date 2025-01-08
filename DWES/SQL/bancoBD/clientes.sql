-- Sacar nombre de representantes de la Empresa

SELECT 
    c.cust_type_cd AS tipo,
    o.fname AS nombreRepresentante,
    o.lname AS apellidosRepresentante
    c.city AS ciudad
FROM 
    customer AS c
INNER JOIN 
    officer AS o ON o.cust_id = c.cust_id
WHERE 
    c.cust_type_cd = 'B';


-- Sacar el nombre de los clientes individuales

SELECT 
    c.cust_type_cd AS tipo,
    i.fname AS nombre,
    i.lname AS apellidos
FROM 
    customer AS c
INNER JOIN 
    individual AS i ON c.cust_id = i.cust_id
WHERE 
    c.cust_type_cd = 'I';

/********************************************************************************************************************************
    1.Sacar el nombre de los clientes individuales y nombres de la empresas
********************************************************************************************************************************/

--- LEFT JOIN

SELECT
	c.cust_id AS id,
    c.cust_type_cd AS tipo,
    i.fname AS nombre,
    i.lname AS apellidos,
    o.fname AS nombreRepre,
    o.lname AS apellidosRepre,
    c.city AS ciudad
FROM
    customer AS c
LEFT JOIN
    individual AS i ON c.cust_id = i.cust_id
LEFT JOIN 
	 officer AS o ON c.cust_id = o.cust_id
WHERE
    c.cust_type_cd = 'I' OR c.cust_type_cd = 'B'

-- Además, sacar el nombre de la empresa

SELECT
	 c.cust_id AS id,
    c.cust_type_cd AS tipo,
    i.fname AS nombreIndividual,
    i.lname AS apellidosIndividual,
    b.name AS nombreEmpresa,
    o.fname AS nombreRepre,
    o.lname AS apellidosRepre,
    c.city AS ciudad
FROM
    customer AS c
LEFT JOIN
    individual AS i ON c.cust_id = i.cust_id
LEFT JOIN 
	 officer AS o ON c.cust_id = o.cust_id
LEFT JOIN
	business AS b ON c.cust_id = b.cust_id
WHERE
    c.cust_type_cd = 'I' OR c.cust_type_cd = 'B'

-- Usando el right y left join

SELECT
	c.cust_id AS IDCustomer,
	c.cust_type_cd AS Tipo,
	c.city AS Ciudad,
	b.name AS Empresa,
	o.fname AS NombreRepresentante
FROM officer AS o
INNER JOIN business AS b ON o.cust_id = b.cust_id
RIGHT JOIN customer AS c ON o.cust_id = c.cust_id
/*
    Al tener customer a la derecha, la tabla con todos los datos, tendremos que usar RIGHT JOIN, para sacar todos los datos
*/



/********************************************************************************************************************************
    2. Sacar el nombre de empleados con el nombre de Jefe (superior_emp_id). 
    
    Duplicar tabla empleados con INNER JOIN con alias Jefe y Empleado
*********************************************************************************************************************************/

-- Desde la tabla empleados
SELECT 
	e.fname AS Empleado,
	jefe.fname AS JefeEmpleado
FROM employee AS e
INNER JOIN employee AS jefe ON e.superior_emp_id = jefe.emp_id

-- Lo mismo pero desde la tabla jefe
SELECT
	Jefe.fname AS Jefe,
	Empleado.fname AS Empleado
FROM employee AS Jefe
LEFT JOIN employee AS Empleado ON Empleado.emp_id = Jefe.superior_emp_id
/*
    Si ponemos que el empleado es el que tiene el superior_emp_id igual al emp_id del jefe, nos saldrán los empleados que tienen jefe, pero al poner LEFT JOIN, nos saldrán todos los jefes, aunque no tengan empleados
*/
