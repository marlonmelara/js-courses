/**
Crear algoritmo que devuelva un array de
objetos en base a pares */

let pairs = [
  [1, { name: "Snoopy" }],
  [2, { name: "Charlie" }],
  [3, { name: "Lucy" }],
];

// El resutado sera:
/**
let array = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Maria" },
];
*/

function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx]; // Se obtiene el par actual del array usando el índice idx.
    collection[idx] = elemento[1]; // Se crea un nuevo objeto en collection en la posición idx, que contiene el objeto del par.
    collection[idx].id = elemento[0]; // Se agrega la propiedad id al objeto actual, usando el primer elemento del par.
  }
  return collection;
}

let result = toCollection(pairs);
console.log(result); // El resutado sera:
/**
[
  { id: 1, name: "Snoopy" },
  { id: 2, name: "Charlie" },
  { id: 3, name: "Lucy" }
]
*/
// El resultado es un array de objetos, donde cada objeto tiene una propiedad id y otra propiedad name.
