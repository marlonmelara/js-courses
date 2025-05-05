const colores = ["rojo", "verde", "azul"];

/* .length
 * (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
 */

console.log(`Tengo ${colores.length} colores almacenados en el array`);

/* .toString
 * - Nos permite transformar un arreglo a una cadena de texto.
 * - Por ejemplo, para poder mostrarlo en el navegador.
 */

document.body.innerHTML = colores.toString();

/* .join()
 * - Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
 */

console.log(colores.join("- -"));

/* .sort()
 * - Nos permite ordenar un arreglo en orden ascendente (números o letras).
 */

const letras = ["c", "b", "d", "a"];
const numeros = [3, 2, 0, 1, -1];

console.log(colores.sort());
console.log(letras.sort());
console.log(numeros.sort());

/* .reverse()
 * - Nos permite ordenar un arreglo en orden descendende.
 */

console.log(numeros.reverse());

/* .concat()
 * - Nos permite concatenar arreglos en uno solo.
 */

const arregloConcat = letras.concat(numeros);
console.log(arregloConcat);

/* .push()
 * - Nos permite agregar un elemento al final de un arreglo.
 */

colores.push("amarillo");
console.log(colores);

/* .pop()
 * - Nos permite eliminar el último elemento de un arreglo.
 */

colores.pop("amarillo");
console.log(colores);

/* .shift()
 * - Elimina el primer elemento de un arreglo y recorre los elementos.
 */

const dias = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
];

console.log(dias);
console.log(dias[0]);
const diaEliminado = dias.shift();
console.log(diaEliminado);
console.log(dias[0]);

/* .unshift()
 * - Agrega un elemento al inicio de un arreglo y empujo los elementos.
 */

dias.unshift("sin asignar");
console.log(dias);

/* .splice()
 * - Nos permite insertar elementos a un arreglo donde le especifiquemos.
 * - 1er parámetro - Posición donde queremos comenzar a insertar los elementos.
 * - 2do parámetro - Si queremos eliminar elementos del arreglo desde la posición indicada.
 * - Resto de parámetros - Los elementos a insertar.
 */

const amigos = [
  "Charlie",
  "Snoppy",
  "Lucy",
  "Woodstock",
  "Sally",
  "Linus",
  "Patty",
  "Marcie",
  "Lufy",
  "Goku",
];

console.log(amigos);
amigos.splice(8, 2, "Schroeder", "Franklin");
console.log(amigos);

/* .slice()
 * - Nos permite copiar una parte de un arreglo a otro.
 * - 1er parámetro - Posición desde donde queremos copiar.
 * - 2do parámetro - Hasta antes de que elemento copiar.
 */

const frutas = ["fresa", "manzana", "uva", "piña", "mango", "naranja", "melon"];
const frutasFavoritas = frutas.slice(1, 6);
console.log(frutasFavoritas);
