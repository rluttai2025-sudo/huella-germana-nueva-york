# Cartografía de Manhattan

## Fuente de referencia
La nomenclatura y los límites textuales se basan en:
https://en.wikipedia.org/wiki/List_of_Manhattan_neighborhoods

La propia fuente advierte que los nombres y límites de barrios de Manhattan no están definidos oficialmente y pueden variar.

## Cambios de esta revisión
- Se incorporó al UI el límite textual de referencia para barrios/sub-barrios de Manhattan.
- Cuando existe una capa cartográfica detallada equivalente en el GeoJSON cargado por la aplicación, esa geometría se usa antes que un rectángulo manual.
- Se eliminó el sesgo artificial de los polígonos de fallback.
- Las entradas definidas por la fuente como intersecciones se representan como puntos.
- Las entradas definidas como tramos/corredores se representan como líneas.
- Los microbarrios sin una geometría pública equivalente conservan un fallback local y deben considerarse reconstrucciones cartográficas, no límites oficiales.

## Validación
El entorno de trabajo no pudo ejecutar `npm run install:ci` porque no pudo resolver `registry.npmjs.org`; por tanto no fue posible completar el build local en esta sesión. Se verificó la integridad estructural del archivo TSX (balances de paréntesis, corchetes y llaves) y se conservaron el package-lock y scripts de build originales.

## v3 — ajuste de sub-neighborhoods

- Se conserva la capa territorial principal usada por el proyecto para barrios y zonas de Manhattan.
- Se agrega una segunda capa GeoJSON de PediaCities, usada exclusivamente como geometría preferente para sub-neighborhoods de Manhattan.
- Los nombres se normalizan (acentos, apóstrofos y variantes compuestas) y se vinculan a la jerarquía de sub-barrios del sitio.
- Al seleccionar un barrio principal se muestran los contornos de los sub-barrios disponibles; al seleccionar un sub-barrio, su geometría específica tiene prioridad sobre NTA o rectángulos de referencia.
- Los puntos, corredores y enclaves históricos sin polígono contemporáneo siguen usando la representación especial definida por el proyecto.
- Fuente de polígonos detallados: PediaCities NYC neighborhoods (GeoJSON, copia pública en GitHub Gist ix4/ff7603f48283cf06fc4fb3dfb6a0635c).

## Revisión detallada de sub-barrios (2-sep-2026)

La auditoría completa está en `SUBNEIGHBORHOOD_AUDIT.md` y cubre 76/76 entradas configuradas en `manhattanGroups`.

Cambios relevantes de esta revisión:
- Astor Row: corredor de West 130th, no punto.
- Little Italy y Radio Row: orientación de corredor fijada explícitamente.
- Little Australia: dos corredores (Mulberry + Mott), no polígono ficticio.
- Alphabet City/Loisaida: se documenta la contradicción de la tabla general y se adopta Avenue A–East River según la página específica.
- Rose Hill, Hudson Square, Marble Hill, Battery Park City, South Street Seaport y Le Petit Senegal: límites complementados con páginas específicas cuando la lista general es insuficiente.
- PediaCities se trata como geometría detallada auxiliar, no como certificación de coincidencia exacta con la convención de Wikipedia.
- Para certificación calle por calle, la siguiente fuente geométrica recomendada es NYC DCP LION (street centerlines).

## v6 — geometría canónica de sub-barrios

La capa de sub-barrios de Manhattan se carga exclusivamente desde `/public/manhattan-subneighborhoods.geojson`. La antigua capa PediaCities y el fallback `streetPolygon(subBounds)` dejaron de participar en el renderizado. Esto impide que un sub-barrio termine convertido silenciosamente en un rectángulo lat/lon o en un polígono de otra clasificación territorial.
