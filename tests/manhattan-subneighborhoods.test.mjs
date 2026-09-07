import fs from 'node:fs';
import assert from 'node:assert/strict';

const page = fs.readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const geo = JSON.parse(fs.readFileSync(new URL('../public/manhattan-subneighborhoods.geojson', import.meta.url), 'utf8'));

assert.equal(geo.type, 'FeatureCollection');
assert.equal(geo.features.length, 76, 'Debe haber exactamente 76 sub-barrios configurados');
const names = geo.features.map(f => f.properties?.name);
assert.equal(new Set(names).size, 76, 'No puede haber sub-barrios duplicados');
for (const f of geo.features) {
  assert.ok(f.properties?.name, 'Cada geometría necesita nombre');
  assert.ok(['Point','LineString','MultiLineString','Polygon'].includes(f.geometry?.type), `Tipo inválido para ${f.properties?.name}`);
  assert.equal(f.properties?.audit_status, 'verified', `${f.properties?.name} debe constar como auditado`);
  assert.match(f.properties?.geometry_method ?? '', /audited$/, `${f.properties?.name} debe declarar cómo se verificó`);
  assert.equal(f.properties?.audit_source_url, 'https://en.wikipedia.org/wiki/List_of_Manhattan_neighborhoods');
}
assert.match(page, /const subNeighborhoodGeo="\/manhattan-subneighborhoods\.geojson";/);
assert.doesNotMatch(page, /gist\.githubusercontent\.com\/ix4\/ff7603f48283cf06fc4fb3dfb6a0635c/);
assert.doesNotMatch(page, /streetPolygon/);
assert.match(page, /active=subLayers\[key\]\|\|\[\]/);

const byName = new Map(geo.features.map(f => [f.properties.name, f]));
const alphabet = byName.get('Alphabet City · Loisaida');
assert.equal(alphabet.geometry.type, 'Polygon');
const alphabetRing = alphabet.geometry.coordinates[0];
const alphabetLons = alphabetRing.map(([lon]) => lon);
assert.ok(Math.min(...alphabetLons) > -73.99, 'Alphabet City no puede extenderse hacia el Hudson');
assert.ok(Math.min(...alphabetLons) < -73.984, 'El borde oeste debe alcanzar Avenue A');
assert.ok(Math.max(...alphabetLons) > -73.974, 'El borde este debe alcanzar la costa del East River');

for (const name of ['Columbus Circle', 'Herald Square', 'Five Points · histórico']) {
  assert.equal(byName.get(name)?.geometry.type, 'Point', `${name} debe representarse como punto`);
}
assert.match(page, /pointLimits\.has\(key\)\?\{color:"#fff",weight:2\.5,opacity:1,fillColor:"#c92f2a",fillOpacity:1\}/, 'Los puntos deben mostrarse como discos rojos perceptibles');
for (const name of ['Diamond District','Little Brazil','Le Petit Senegal','Brookdale','Little Italy','Radio Row · histórico','Little Syria · histórico','Bowery','Astor Row']) {
  const corridor = byName.get(name);
  assert.equal(corridor?.geometry.type, 'LineString', `${name} debe representarse como corredor`);
  const lats = new Set(corridor.geometry.coordinates.map(([, lat]) => lat));
  const lons = new Set(corridor.geometry.coordinates.map(([lon]) => lon));
  assert.ok(lats.size > 1 && lons.size > 1, `${name} debe respetar la orientación de la calle, no un paralelo o meridiano artificial`);
}
const diamond = byName.get('Diamond District');
assert.equal(diamond.properties.geometry_method, 'lion-street-centerline-audited');
assert.equal(diamond.geometry.coordinates.length, 2, 'Diamond District debe unir exactamente 6th Avenue con 5th Avenue');
assert.ok(diamond.geometry.coordinates[0][1] > diamond.geometry.coordinates.at(-1)[1], '47th Street debe descender hacia el este en el mapa, no dibujarse horizontal');
assert.ok(diamond.geometry.coordinates[0][0] < -73.981, 'El corredor debe comenzar junto a 6th Avenue');
assert.ok(diamond.geometry.coordinates.at(-1)[0] > -73.979, 'El corredor debe terminar junto a 5th Avenue');
assert.equal(byName.get('Little Australia')?.geometry.type, 'MultiLineString');

const madisonSquare = byName.get('Madison Square');
assert.equal(madisonSquare?.geometry.type, 'Polygon');
const madisonRing = madisonSquare.geometry.coordinates[0];
const madisonLons = madisonRing.map(([lon]) => lon);
const madisonLats = madisonRing.map(([, lat]) => lat);
assert.ok(Math.min(...madisonLons) > -73.991, 'Madison Square no debe extenderse al oeste de Broadway');
assert.ok(Math.max(...madisonLons) < -73.986, 'Madison Square no debe extenderse al este de 5th Avenue');
assert.ok(Math.min(...madisonLats) > 40.7405 && Math.max(...madisonLats) < 40.7455, 'Madison Square debe quedar entre West 23rd y West 26th Streets');

const nomad = byName.get('NoMad').geometry.coordinates[0];
assert.ok(Math.max(...nomad.map(([lon]) => lon)) < -73.984, 'NoMad no puede extenderse al este de Madison Avenue');
const sutton = byName.get('Sutton Place').geometry.coordinates[0];
assert.ok(Math.min(...sutton.map(([lon]) => lon)) > -73.967, 'Sutton Place debe quedar al este de 1st Avenue');
console.log('OK: 76 geometrías locales, únicas y sin fallback rectangular/PediaCities.');
