// Ejemplos de uso del método filter para filtrar elementos de un array

const users = [
  { age: 25, name: "Alice", active: true },
  { age: 16, name: "Bob", active: false },
  { age: 35, name: "Charlie", active: true },
  { age: 17, name: "David", active: false },
  { age: 45, name: "Eve", active: true },
];

// Filtrar usuarios mayores de edad
const adults = users.filter((user) => user.age >= 18);
console.log(adults); // [{ age: 25, name: "Alice", active: true }, { age: 35, name: "Charlie", active: true }, { age: 45, name: "Eve", active: true }]

// Filtrar usuario menores de edad
const minors = users.filter((user) => user.age < 18);
console.log(minors); // [{ age: 16, name: "Bob", active: false }, { age: 17, name: "David", active: false }]
