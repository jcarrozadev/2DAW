
/******************************************************************************************************************************/
/********************************************************** PRUEBAS ***********************************************************/
/******************************************************************************************************************************/

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