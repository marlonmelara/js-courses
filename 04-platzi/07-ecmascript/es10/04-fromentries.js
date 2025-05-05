// Object.fromEntries() es una característica introducida en ECMAScript 2019 (ES10). Este método transforma una lista de pares clave-valor en un objeto. Es especialmente útil cuando se trabaja con estructuras de datos como Map, que almacenan datos en formato de pares clave-valor.

// Creación de un objeto Map con pares clave-valor.
const entries = new Map([
  ["name", "Jhon"],
  ["age", 29],
]);

// Muestra el objeto Map en la consola.
console.log(entries); // Imprime el Map con sus pares clave-valor.

// Utiliza Object.fromEntries para convertir los pares clave-valor del Map en un objeto.
console.log(Object.fromEntries(entries)); // Resultado: { name: "Jhon", age: 29 }

// Esto es útil para convertir estructuras de datos que se ajustan a la iteración de pares clave-valor en objetos literales regulares.
