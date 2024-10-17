# Explicación Versión 2

En esta usamos el position relative.
Para ello ponemos como padre relative a una y dentro 2 divs.

## Position Relative - Padre

## Position Absolute - Hijo

- Tenemos un absolute que no deja flujo dentro si se mueve, pero sí que ya tiene referencia el padre relative, no el body.

## Position Relative - Hijo

- Tenemos un relative dentro del padre relative, que sí deja flujo, es decir, nos dejará el espacio que ocupa inicialmente y no se rellenará nada ahí aunque el se mueva.

- Coge de referencia el padre relative.