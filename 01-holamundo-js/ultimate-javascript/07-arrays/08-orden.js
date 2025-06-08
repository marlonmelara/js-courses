// Ordenar un array de números en JavaScript

let numbers = [5, 3, 8, 1, -2];

// Ordenar el array de menor a mayor
numbers.sort();
console.log(numbers); // [-2, 1, 3, 5, 8]

// Ordenar el array de mayor a menor
numbers.reverse();
console.log(numbers); // [8, 5, 3, 1, -2]

// Ordenar un array de letras
let letters = ["b", "d", "a", "c"];

// Ordenar el array de letras de forma alfabética
letters.sort();
console.log(letters); // ['a', 'b', 'c', 'd']

// Ordenar el array de letras con mayúsculas y minúsculas
let mixedletters = ["b", "D", "a", "C"];

mixedletters.sort();
console.log(mixedletters); // ['C', 'D', 'a', 'b']

// Ordenar el array de letras con mayúsculas y minúsculas de forma insensible a mayúsculas
mixedletters.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(mixedletters); // ['a', 'b', 'C', 'D']

// Ordenar un array de objetos por una propiedad específica
let people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

// Ordenar por edad
people.sort((a, b) => a.age - b.age);
console.log(people); // [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]

// Ordenar por nombre
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people); // [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 }]

// Ordenar un array de números con una función de comparación personalizada
let numbers2 = [5, 3, 8, 1, -2];

// Ordenar de menor a mayor
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [-2, 1, 3, 5, 8]

// Ordenar de mayor a menor
numbers2.sort((a, b) => b - a);
console.log(numbers2); // [8, 5, 3, 1, -2]
