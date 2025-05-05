//Promise.any() es una característica introducida en ECMAScript 2021 (ES12). Promise.any() toma un iterable de promesas y devuelve una promesa que se resuelve tan pronto como una de las promesas del iterable se resuelve. Si todas las promesas son rechazadas, Promise.any() devuelve una promesa rechazada con un AggregateError.

// Creación de tres promesas: una que se rechaza y dos que se resuelven.
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

// Utiliza Promise.any para devolver la primera promesa que se resuelva.
Promise.any([promise1, promise2, promise3]).then(
  (response) => console.log(response) // Imprime el valor de la primera promesa resuelta.
);
