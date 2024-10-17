# Explicación Versión 1

- Usamos dos cajas (roja y azul) para entender position absolute y fixed.

## Absolute - No se mueve del contenedor.

- Tiene propiedad de top: 150px
- Tiene como referencia el body ya que no tiene padre con relative.
- No deja espacio en el flujo.

## Fixed - No se mueve del html.

### Diferencias

- Ambas tienen el mismo efecto en este caso.
- Position Absolute sería diferente si tuviera un padre relative, al no tenerlo, se junta con el body.
- Position Fixed siempre va a ir respecto al body / html, no se va a mover de estos.