// Buscar elementos de referencia en un array

const users = [
  { id: 1, name: "Snoopy" },
  { id: 1, name: "Lucy" },
  { id: 2, name: "Charlie Brown" },
  { id: 3, name: "Linus" },
];

// Busca un objeto
const result = users.indexOf({ id: 2, name: "Charlie Brown" });
console.log(result); // -1 (no encontrado, porque los objetos son referencias diferentes)

// Para buscar un objeto por una propiedad específica con id 2, usamos find
const user1 = users.find((user) => user.id === 2);
console.log(user1); // { id: 2, name: "Charlie Brown" }

// Busca el primer objeto con id 1
const user2 = users.find((user) => user.id === 1);
console.log(user2); // { id: 1, name: "Snoopy" }

// Usando findIndex para obtener el índice del objeto con id 2
const index1 = users.findIndex((user) => user.id === 2);
console.log(index1); // 2 (índice del objeto con id 2)

const people = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 30 },
  { id: 4, name: "Diana", age: 40 },
];

// Encontrar el índice de la primera persona mayor de 35 años
const indexOldPerson = people.findIndex((person) => person.age > 35);
console.log(indexOldPerson); // Salida: 3 (Diana tiene 40 años)

// Encontrar el índice de la primera persona con un ID de 2
const indexBob = people.findIndex((person) => person.id === 2);
console.log(indexBob); // Salida: 1

// Encontrar el índice de la primera persona llamada 'Charlie'
const indexCharlie = people.findIndex((person) => person.name === "Charlie");
console.log(indexCharlie); // Salida: 2

// Si no encuentra nada
const indexYoungPerson = people.findIndex((person) => person.age < 20);
console.log(indexYoungPerson); // Salida: -1
