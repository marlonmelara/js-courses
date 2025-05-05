/*
 * 📌 Método Object.values()
 * - Definición:
 *   El método Object.values() retorna un array con los valores de las propiedades enumerables del objeto que se le pasa como argumento.
 *   Los valores son retornados en el mismo orden que serían retornados si se utilizara un bucle for...in, pero a diferencia de for...in,
 *   Object.values() ignora las propiedades en la cadena de prototipos.
 *
 * - Sintaxis:
 *   Object.values(obj)
 *   - obj: El objeto cuyos valores de propiedades enumerables se van a retornar.
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

// Usando Object.values() para obtener un array que contiene los valores de las propiedades del objeto.
// En este caso, se obtiene un array con los nombres completos de los países.
console.log(Object.values(countries));
// Output: [ 'México', 'Colombia', 'Chile', 'Argentina', 'El Salvador' ]

/*
 * En el resultado obtenido, se tiene un array que contiene los nombres completos de los países,
 * representando los valores de las propiedades del objeto 'countries'.
 */
