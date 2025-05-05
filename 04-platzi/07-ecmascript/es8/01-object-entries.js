/*
 * 📌 Método Object.entries()
 * - Definición:
 *   El método Object.entries() retorna un array de arrays, donde cada sub-array es un par [key, value] que representa
 *   una propiedad del objeto. Las propiedades son enumeradas en el mismo orden que serían si se usara un bucle for...in,
 *   pero a diferencia de for...in, Object.entries() no enumera las propiedades en la cadena de prototipos.
 *
 * - Sintaxis:
 *   Object.entries(obj)
 *   - obj: El objeto cuyas propiedades enumerables propias se van a retornar.
 *
 * Ejemplo:
 *
 */

// Definiendo un objeto que representa países con sus respectivas abreviaciones como claves.
const countries = {
  MX: "México",
  CO: "Colombia",
  CL: "Chile",
  AR: "Argentina",
  SV: "El Salvador",
};

// Usando Object.entries() para obtener un array que contiene sub-arrays [key, value] de las propiedades del objeto.
// En este caso, se obtiene un array con pares que representan la abreviación del país y su nombre completo.
console.log(Object.entries(countries));
// Output: [ [ 'MX', 'México' ], [ 'CO', 'Colombia' ], [ 'CL', 'Chile' ], [ 'AR', 'Argentina' ], [ 'SV', 'El Salvador' ] ]

/*
 * En el resultado obtenido, cada sub-array representa una propiedad del objeto 'countries', donde el primer elemento
 * es la clave (abreviación del país) y el segundo elemento es el valor (nombre completo del país).
 */
