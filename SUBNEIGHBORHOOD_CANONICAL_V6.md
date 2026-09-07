# Manhattan sub-neighborhoods — canonical geometry v6

## Qué cambia

La v6 elimina la causa sistémica de los errores visuales detectados en v5:

- ya no se usa PediaCities para decidir la geometría de un sub-barrio;
- ya no existe `streetPolygon(subBounds)` como fallback cartográfico;
- los 76 sub-barrios configurados tienen una geometría local única en `public/manhattan-subneighborhoods.geojson`;
- los puntos se guardan como `Point`, los corredores como `LineString`, Little Australia como `MultiLineString` y las áreas/islas como `Polygon`;
- al seleccionar un sub-barrio, el mapa usa únicamente esa geometría canónica local.

## Cobertura

- Total configurado: 76
- Geometrías locales: 76
- Duplicados: 0
- Geometrías inválidas: 0
- Point: 3
- LineString: 9
- MultiLineString: 1
- Polygon: 63

## Casos visuales reportados

Se conservan geometrías específicas revisadas para Rockefeller Center, Flower District, Turtle Bay, Meatpacking District, Little Germany histórico y Alphabet City / Loisaida. También se preservan geometrías específicas previas de Marble Hill, Inwood, Fort George, Hudson Heights, West Village, Roosevelt Island y Randalls/Wards Islands.

## Regla de seguridad

Si una geometría no existe en el GeoJSON canónico, el sitio ya no inventa un rectángulo ni sustituye automáticamente el sub-barrio por otra capa externa.

## Validación automática

`tests/manhattan-subneighborhoods.test.mjs` verifica que existan exactamente 76 geometrías únicas, que los tipos sean válidos y que el código no contenga el fallback rectangular ni la antigua fuente PediaCities.
