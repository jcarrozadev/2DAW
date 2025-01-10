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

SELECT
	Empleado.fname AS Empleado,
	Jefe.fname AS Jefe
FROM employee AS Empleado
INNER JOIN employee AS Jefe ON Jefe.emp_id = Empleado.superior_emp_id

SELECT
	Empleado.fname AS Empleado,
	Jefe.fname AS Jefe
FROM employee AS Empleado
LEFT JOIN employee AS Jefe ON Jefe.emp_id = Empleado.superior_emp_id
/*
    Si ponemos que el empleado es el que tiene el superior_emp_id igual al emp_id del jefe, nos saldrán los empleados que tienen jefe, pero al poner LEFT JOIN, nos saldrán todos los empleados, aunque no tengan jefe
*/

/********************************************************************************************************************************
    3. Suma del balance entre todas las cuentas
*********************************************************************************************************************************/

SELECT SUM(avail_balance) AS TotalBalance FROM account

/********************************************************************************************************************************
    4. El cliente que tiene el balance mayor
*********************************************************************************************************************************/

SELECT 
    c.cust_id AS IDCliente,
    c.cust_type_cd AS Tipo,
    c.city AS Ciudad,
    MAX(a.avail_balance) AS Balance
FROM
    customer AS c
INNER JOIN
    account AS a ON c.cust_id = a.cust_id

/********************************************************************************************************************************
    5. Cuantos clientes tengo que sean empresas
*********************************************************************************************************************************/

SELECT COUNT(*) AS TotalEmpresas FROM customer WHERE cust_type_cd = 'B'

/********************************************************************************************************************************
    6. Cuantos empleados hay en cada departamento, saco el nombre del departamento y numero de empleados
*********************************************************************************************************************************/

SELECT 
    d.name AS Departamento,
    COUNT(e.emp_id) AS NumeroEmpleados
FROM
    department AS d
INNER JOIN
    employee AS e ON d.dept_id = e.dept_id
GROUP BY d.name

/********************************************************************************************************************************
    7. Filtrar para que saque el total de empleados por departamento pero contratados en el año 2002
*********************************************************************************************************************************/

SELECT 
    d.name AS Departamento,
    COUNT(e.emp_id) AS NumeroEmpleados
FROM
    department AS d
INNER JOIN
    employee AS e ON d.dept_id = e.dept_id
WHERE
    YEAR(e.start_date) = 2002
GROUP BY d.name

/********************************************************************************************************************************
    8. Lista de empleados contratados en el año 2002
*********************************************************************************************************************************/

SELECT 
    e.fname AS Nombre,
    e.lname AS Apellidos,
    e.start_date AS FechaContratacion
FROM
    employee AS e
WHERE
    YEAR(e.start_date) = 2002

/********************************************************************************************************************************
    9. Ordenación por año y departamento. (En este departamento, el año tal se contrataron tantos empleados)
*********************************************************************************************************************************/

SELECT 
    d.name AS Departamento,
    YEAR(e.start_date) AS AñoContratacion,
    COUNT(e.emp_id) AS NumeroEmpleados
FROM
    employee AS e
INNER JOIN
    department AS d ON e.dept_id = d.dept_id
GROUP BY d.dept_id, YEAR(e.start_date)

/********************************************************************************************************************************
    10. Sacar todos los empleados, agrupados por departamento, solamente para aquellos departamentos que tienen mas de 2 empleados
*********************************************************************************************************************************/

SELECT 
    d.name AS Departamento,
    COUNT(e.emp_id) AS NumeroEmpleados
FROM
    employee AS e
INNER JOIN
    department AS d ON e.dept_id = d.dept_id
GROUP BY d.dept_id
HAVING NumeroEmpleados > 2

/********************************************************************************************************************************
    10. Sacar todos los empleados, agrupados por departamento, solamente para aquellos departamentos que tienen mas de 2 empleados
    y que hayan sido contratados en el año 2002
*********************************************************************************************************************************/

SELECT 
    d.name AS Departamento,
    COUNT(e.emp_id) AS NumeroEmpleados
FROM
    employee AS e
INNER JOIN
    department AS d ON e.dept_id = d.dept_id
WHERE
	YEAR(e.start_date) = 2002
GROUP BY d.dept_id
HAVING NumeroEmpleados > 2


/********************************************************************************************************************************
    11. Sacar un listado de clientes que han nacido antes de 1970.
*********************************************************************************************************************************/

SELECT * 
FROM customer
WHERE cust_id IN (
    SELECT cust_id FROM individual
    WHERE YEAR(birth_date) < 1970
);