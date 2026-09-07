# Corrección visual final de sub-barrios · v5

Revisión realizada a partir de las capturas aportadas por el usuario y de los límites adoptados para Manhattan.

## Casos corregidos explícitamente

- Turtle Bay — E 42nd–E 53rd; East River–Lexington Ave. Se reemplaza la caja lat/lon por un polígono orientado a la retícula y con borde este siguiendo la costa del East River.
- Rockefeller Center — 49th–51st; 5th–6th Aves. Se reemplaza la caja axis-aligned por un paralelogramo alineado con las calles/avenidas reales.
- Flower District — 26th–28th; 6th–7th Aves. Se reemplaza la caja axis-aligned por un polígono alineado con la retícula de Manhattan.
- Meatpacking District — Horatio–W 15th; Hudson St–Hudson River. Se reemplaza la caja por un polígono irregular que respeta la orientación de Hudson Street y la ribera.
- Little Germany (histórico) — E 7th–E 10th; Avenues A–B. Se elimina el rombo incorrecto y se usa el cuadrilátero alineado con las cuatro calles límite.
- Alphabet City / Loisaida — E Houston–E 14th; Avenue A–East River. Se corrige el polígono para fijar Avenue A como borde oeste y la ribera del East River como borde este.

## Cambio de prioridad de renderizado

Estos seis casos se marcan como `manualGeometryPriority`: su geometría revisada tiene prioridad sobre cualquier neighborhood externo de mayor extensión y sobre los antiguos fallbacks rectangulares.

## Validación

- Los seis polígonos son geométricamente válidos y no se autointersectan.
- TypeScript no reporta errores de sintaxis introducidos por esta modificación. La comprobación completa sigue sin poder resolver las dependencias que no vienen en el ZIP (`react`, `leaflet`, `next`, etc.).
