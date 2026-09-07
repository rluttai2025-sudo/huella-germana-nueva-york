# Auditoría detallada de límites — sub-barrios de Manhattan
Fecha de revisión: 2 de septiembre de 2026.
## Criterio
- Referencia canónica solicitada: **Wikipedia, List of Manhattan neighborhoods**. La propia página indica que los límites son aproximados y no oficiales.
- Se revisaron **76/76** entradas configuradas como sub-barrios en `manhattanGroups`.
- Se distingue entre **área**, **corredor**, **punto/intersección** e **isla/costa**. No se convierte un corredor o punto en un polígono ficticio.
- Una definición textual correcta no equivale a una geometría GIS certificada. PediaCities se considera una geometría detallada auxiliar, no una prueba de coincidencia exacta con las calles de Wikipedia.
- Para certificar bordes calle por calle, la fuente geométrica adecuada es **NYC Department of City Planning LION**, que representa las calles como líneas y admite consultas GeoJSON.

## Hallazgos críticos corregidos en v4
1. **Astor Row**: deja de tratarse como punto. Es un corredor en el lado sur de West 130th Street entre Fifth y Lenox/Malcolm X.
2. **Little Italy** y **Radio Row**: la orientación del corredor ya no se deduce del aspecto de una caja; se fuerza la orientación vertical indicada por la fuente.
3. **Little Australia**: deja de fingirse como un único corredor/polígono; se representa como los dos corredores Mulberry + Mott dentro de Nolita.
4. **Alphabet City / Loisaida**: se documenta la contradicción de la tabla general (dice Hudson River–Avenue A) y se usa la página específica/Avenue A como criterio práctico: Avenue A–East River.
5. **Rose Hill, Hudson Square, Marble Hill, Battery Park City, South Street Seaport, Le Petit Senegal**: se incorporaron precisiones de las páginas específicas cuando la tabla general no cierra el área por sí sola.
6. El código ya no denomina internamente “precisa” a una geometría de PediaCities: ahora es **geometría detallada**, porque puede no coincidir exactamente con la convención de Wikipedia.

## Revisión de las 76 entradas

### Upper Manhattan
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 1 | Marble Hill | área | La lista general no da calles de cierre. La página específica lo sitúa aproximadamente entre Terrace View/Johnson Avenue al oeste, 228th–230th Streets al norte, el Harlem River al sur y un borde oriental que atraviesa Marble Hill Houses/River Plaza. | △ Tabla complementada con página específica. Polígono detallado/fallback no equivale a certificación calle por calle. |
| 2 | Inwood | área | Por encima de Dyckman Street. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |

### Washington Heights
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 3 | Fort George | área | Al este de Broadway, entre West 181st Street y Dyckman Street. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 4 | Hudson Heights | área | De West 181st Street a Fort Tryon Park, al oeste de Broadway. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |

### Harlem
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 5 | West Harlem | área | West 125th–West 155th Streets; St. Nicholas Avenue–Broadway. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 6 | Hamilton Heights | área | West 135th–West 155th Streets; Broadway–Hudson River. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 7 | Manhattanville | área | West 125th–West 135th Streets; St. Nicholas Avenue–Hudson River. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 8 | Morningside Heights | área | West 110th–West 125th Streets; Morningside Drive–Riverside Drive. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |
| 9 | Central Harlem | área | 110th–155th Streets; Park Avenue–St. Nicholas Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 10 | St. Nicholas Historic District · Strivers’ Row | área | West 137th–West 138th Streets; 7th–8th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 11 | Astor Row | corredor | West 130th Street, lado sur, entre Fifth Avenue y Lenox Avenue / Malcolm X Boulevard (detalle de la página específica de Astor Row). | △ Tabla complementada con página específica. Geometría especial corregida. |
| 12 | Sugar Hill | área | West 145th–West 155th Streets; Edgecombe Avenue–Amsterdam Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 13 | Marcus Garvey Park · Mount Morris Historic District | área | 120th–124th Streets; Madison Avenue–5th Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 14 | Le Petit Senegal | corredor | West 116th Street, principalmente entre Frederick Douglass Boulevard y Lenox Avenue / Malcolm X Boulevard; la lista lo resume como 116th Street al este de Morningside Park. | △ Tabla complementada con página específica. Geometría especial corregida. |
| 15 | East Harlem | área | 96th–141st Streets; East River–5th Avenue. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |

### Upper East Side
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 16 | Lenox Hill | área | 60th–77th Streets; East River–Park Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 17 | Carnegie Hill | área | 86th–98th Streets; 3rd–5th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 18 | Yorkville | área | East 79th–East 96th Streets; East River–3rd Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |

### Upper West Side
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 19 | Manhattan Valley · Bloomingdale District | área | West 96th–West 110th Streets; Central Park West–Broadway. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 20 | Lincoln Square | área | West 59th–West 66th Streets; Columbus Avenue–Broadway. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |

### Midtown East
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 21 | Sutton Place | área | East 53rd–East 59th Streets; 1st Avenue–Sutton Place. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 22 | Rockefeller Center | área | 49th–51st Streets; 5th–6th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 23 | Diamond District | corredor | 47th Street, de 5th a 6th Avenue. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 24 | Turtle Bay | área | East 42nd–East 53rd Streets; East River–Lexington Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 25 | Tudor City | área | East 40th–East 43rd Streets; 1st–2nd Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 26 | Little Brazil | corredor | 46th Street, de 5th a 6th Avenue. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 27 | Murray Hill · Curry Hill · Little India | área | East 34th–East 40th Streets; 3rd–Madison Avenues. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |
| 28 | Herald Square | punto / intersección | Intersección de West 34th Street y 6th Avenue. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |

### Midtown
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 29 | Columbus Circle | punto / intersección | Intersección de West 59th Street y 8th Avenue. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 30 | Theater District | área | West 42nd–West 53rd Streets; 6th–8th Avenues. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |
| 31 | Times Square | área | West 39th–West 52nd Streets; 7th–9th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 32 | Garment District | área | 34th–42nd Streets; 5th–9th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 33 | Koreatown | área | 31st–36th Streets; 5th–6th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 34 | Tenderloin | área | 23rd–42nd Streets; 5th–7th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 35 | Madison Square | área | West 23rd–West 26th Streets; 5th Avenue–Broadway. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |

### Midtown West
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 36 | Hudson Yards | área | West 28th–West 40th Streets; 9th Avenue–Hudson River. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 37 | Hell’s Kitchen · Clinton | área | West 34th–West 59th Streets; 8th Avenue–Hudson River. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |

### Chelsea
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 38 | Flower District | área | 26th–28th Streets; 6th–7th Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 39 | Chelsea | área | West 14th–West 34th Streets; 6th Avenue–Hudson River. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 40 | Flatiron District · Toy District · Photo District | área | 16th–27th Streets; Park Avenue South–6th Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 41 | NoMad | área | East 25th–East 29th Streets; Madison Avenue–6th Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 42 | Meatpacking District | área | Horatio Street–West 15th Street; Hudson Street–Hudson River. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |

### Kips Bay · Gramercy
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 43 | Brookdale | corredor | East 25th Street, de FDR Drive a 1st Avenue. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 44 | Kips Bay | área | East 23rd–34th Streets; East River–3rd Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 45 | Rose Hill | área | 23rd–32nd Streets; Madison Avenue–3rd Avenue según la definición citada por la página específica de Rose Hill; la lista general solo lo sitúa entre Murray Hill y Gramercy Park. | △ Tabla complementada con página específica. Polígono detallado/fallback no equivale a certificación calle por calle. |
| 46 | Peter Cooper Village | área | East 20th–East 23rd Streets; Avenue C–1st Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 47 | Gramercy Park | área | East 14th–East 23rd Streets; 1st Avenue–Park Avenue South. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 48 | Stuyvesant Square | área | 15th–18th Streets; 1st–3rd Avenues. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 49 | Union Square | área | East 14th–East 17th Streets; 4th Avenue–University Place. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 50 | Stuyvesant Town | área | East 14th–East 20th Streets; Avenue C–1st Avenue. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 51 | Waterside Plaza | área | East 25th–East 29th Streets; East River–FDR Drive. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |

### East Village
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 52 | Little Germany · histórico | área | East 7th–East 10th Streets; Avenues A–B. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 53 | Alphabet City · Loisaida | área | East Houston–East 14th Streets; Avenue A–East River. La tabla general actualmente muestra "Hudson River–Avenue A", pero la página específica de Alphabet City lo define desde Avenue A hasta el East River. | ⚠️ Conflicto en tabla; criterio resuelto con página específica. Geometría de área aún debe certificarse contra calles. |

### Greenwich Village
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 54 | NoHo | área | East Houston Street–Astor Place; Bowery–Broadway. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |
| 55 | West Village | área | West Houston–West 14th Streets; 6th/7th Avenue–Hudson River. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |

### Lower East Side
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 56 | Bowery | corredor | Canal Street–East 4th Street; corredor de Bowery. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 57 | Cooperative Village | área | Frankfort–Grand Streets; FDR Drive–East Broadway. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 58 | Two Bridges | área | Brooklyn Bridge–Montgomery Street; St. James Place–East River. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |

### SoHo · Chinatown
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 59 | SoHo | área | Canal–West Houston Streets; Lafayette–Varick Streets. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 60 | Nolita | área | Broome–Houston Streets; Bowery–Lafayette Street. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |
| 61 | Little Australia | dos corredores | Mulberry Street y Mott Street en Nolita. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 62 | Little Italy | corredor | Mulberry Street, de Canal a Broome Street. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 63 | Chinatown | área | Chambers–Delancey Streets; East Broadway–Broadway. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |
| 64 | Five Points · histórico | punto / intersección | Entorno de Worth Street y Baxter Street. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |

### Lower Manhattan
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 65 | Tribeca | área | Vesey Street–Canal Street; Broadway–Hudson River. | ◐ Existe geometría PediaCities verificada por nombre; útil como base, pero no certificada contra cada calle de Wikipedia. |
| 66 | Civic Center | área | Vesey–Chambers Streets; East River–Broadway. | ✗ La definición textual está revisada, pero si PediaCities no coincide por nombre el código cae a un polígono manual/caja: no puede considerarse exacto. |
| 67 | Radio Row · histórico | corredor | Greenwich Street de Cortlandt a Dey Streets (actual World Trade Center). | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |
| 68 | South Street Seaport · histórico | área | La lista general lo sitúa al sur de Fulton Street y junto al FDR Drive; el distrito histórico se describe aproximadamente entre East River, Brooklyn Bridge, Fletcher Alley y Pearl/South Streets. | △ Tabla complementada con página específica. Polígono detallado/fallback no equivale a certificación calle por calle. |
| 69 | Battery Park City | área | Al oeste de West Street; la página específica precisa que queda rodeado por el Hudson River al oeste, norte y sur. | △ Tabla complementada con página específica. Polígono detallado/fallback no equivale a certificación calle por calle. |
| 70 | Hudson Square | área | Clarkson Street–Canal Street; Hudson River–Varick Street (página específica de Hudson Square; la fila de la lista general aparece truncada como "West"). | △ Tabla complementada con página específica. Polígono detallado/fallback no equivale a certificación calle por calle. |
| 71 | Little Syria · histórico | corredor | Washington Street desde Battery Park hasta más allá de Rector Street. | ✓ Geometría conceptual corregida: no se dibuja como área ficticia. |

### Islands
| # | Sub-barrio | Tipo correcto | Límite de referencia revisado | Fuente / estado geométrico |
|---:|---|---|---|---|
| 72 | Ellis Island | isla / costa | Isla de Ellis. | ◇ La lista solo enumera la isla; usar costa real, no calles. |
| 73 | Governors Island | isla / costa | Governors Island. | ◇ La lista solo enumera la isla; usar costa real, no calles. |
| 74 | Liberty Island | isla / costa | Liberty Island. | ◇ La lista solo enumera la isla; usar costa real, no calles. |
| 75 | Randalls and Wards Islands | isla / costa | Randalls and Wards Islands. | ◇ La lista solo enumera la isla; usar costa real, no calles. |
| 76 | Roosevelt Island | isla / costa | Roosevelt Island. | ◇ La lista solo enumera la isla; usar costa real, no calles. |

## Resultado de la auditoría
- Cobertura de definiciones: **76/76** sub-barrios revisados.
- Casos especiales corregidos por tipo: **3 puntos + 9 corredores + 1 caso de dos corredores = 13**.
- Islas/costas: **5**.
- Áreas restantes: **58**. Su definición textual está revisada, pero no todas tienen una geometría de calle certificada.

### Conclusión técnica
La revisión demuestra que el problema visible de la v3 no estaba en los barrios principales, sino en la capa de sub-barrios: muchos nombres no existen en PediaCities y por eso terminaban en cajas rectangulares. **No se debe publicar una afirmación de “límites exactos” mientras esos fallbacks sigan siendo el borde final.** El siguiente cierre geométrico debe sustituir esos fallbacks por líneas/contornos derivados de LION (calles) y costa real (ríos/islas), respetando la especificación de esta tabla.
