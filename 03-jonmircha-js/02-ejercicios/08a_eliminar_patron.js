/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */
console.log("***** Solución JonMircha Modificada *****");
const eliminarPatron = (texto = "", patron = "") => {
  if (typeof texto !== "string" || !texto)
    return console.warn("No ingresaste el texto válido");

  if (!patron) return console.warn("No ingresaste el patron");

  console.info(texto.replace(new RegExp(patron, "ig"), ""));
};

eliminarPatron();
eliminarPatron(7);
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "x");
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "[a-z]");

/**
La función new RegExp(patron, "ig") en JavaScript crea un nuevo objeto de expresión regular a partir del patrón proporcionado.

Las banderas (o modificadores) que siguen al patrón de la expresión regular especifican cómo debe realizarse la búsqueda. En este caso, se utilizan dos banderas:

i: Esta bandera indica que la búsqueda debe ser insensible a mayúsculas y minúsculas. Por ejemplo, si estás buscando el patrón "abc", también coincidirá con "ABC", "AbC", etc.

g: Esta bandera indica que la búsqueda debe ser global, lo que significa que encontrará todas las coincidencias en la cadena, no solo la primera.

Entonces, new RegExp(patron, "ig") crea una expresión regular que busca todas las ocurrencias del patron de una manera que no distingue entre mayúsculas y minúsculas. 
*/
