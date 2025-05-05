// Promise.allSettled es una característica introducida en ECMAScript 2020 (ES11). Este método toma un iterable de Promesas y devuelve una nueva Promesa que se resuelve después de que todas las promesas del iterable se hayan "asentado" (es decir, resuelto o rechazado). El resultado es un arreglo de objetos que describen el resultado de cada promesa, independientemente de si fue resuelta o rechazada.

// Creación de tres promesas: una que se rechaza y dos que se resuelven.
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

// Utiliza Promise.allSettled para manejar un conjunto de promesas.
Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
); // Imprime el resultado de todas las promesas.
