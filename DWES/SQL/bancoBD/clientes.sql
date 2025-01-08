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

-------------------------------- Sacar el nombre de los clientes individuales y nombres de la empresas


--- UNION

SELECT
    c.cust_type_cd AS tipo,
    i.fname AS nombre,
    i.lname AS apellidos,
    c.city AS ciudad
FROM
    customer AS c
INNER JOIN
    individual AS i ON c.cust_id = i.cust_id
WHERE
    c.cust_type_cd = 'I'

UNION

SELECT
    c.cust_type_cd AS tipo,
    o.fname AS nombre,
    o.lname AS apellidos,
    c.city AS ciudad
FROM
    customer AS c
INNER JOIN
    officer AS o ON c.cust_id = o.cust_id
WHERE
    c.cust_type_cd = 'B';

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










/******************* Pruebas *******************/

-- Si hago un LEFT JOIN con la tabla individual y officer, me salen los datos de los dos, pero si hago un INNER JOIN, solo me salen los datos de la tabla officer

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
INNER JOIN 
	 officer AS o ON c.cust_id = o.cust_id
WHERE
    c.cust_type_cd = 'I' OR c.cust_type_cd = 'B'