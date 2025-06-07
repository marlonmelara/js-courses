// Buscar elementos de referencia en un array

const users = [
  { id: 1, name: "Snoopy" },
  { id: 1, name: "Lucy" },
  { id: 2, name: "Charlie Brown" },
  { id: 3, name: "Linus" },
];

const result = users.indexOf({ id: 2, name: "Charlie Brown" }); // Busca un objeto
console.log(result); // -1 (no encontrado, porque los objetos son referencias diferentes)

// Para buscar un objeto por una propiedad específica, usamos find
const user1 = users.find((user) => user.id === 2); // Busca el objeto con id 2
console.log(user1); // { id: 2, name: "Charlie Brown" }

const user2 = users.find((user) => user.id === 1); // Busca el primer objeto con id 1
console.log(user2); // { id: 1, name: "Snoopy" }

// Usando findIndex para obtener el índice del objeto
const index1 = users.findIndex((user) => user.id === 2); // Busca el índice del objeto con id 2
console.log(index1); // 2 (índice del objeto con id 2)
