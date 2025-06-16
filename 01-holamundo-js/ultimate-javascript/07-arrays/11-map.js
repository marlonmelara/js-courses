// Ejemplo de uso de map para crear un array

const users = [
  { age: 25, name: "Alice", active: true },
  { age: 16, name: "Bob", active: false },
  { age: 35, name: "Charlie", active: true },
  { age: 17, name: "David", active: false },
  { age: 45, name: "Eve", active: true },
];

// Crear el array de usuarios a un array de nombres
const userNames = users.map((user) => user.name);
console.log(userNames); // ["Alice", "Bob", "Charlie", "David", "Eve"]

// Crear el array de usuarios mayores de edad a un array de nombres dentro de un lista HTML
const userList = users
  .filter((user) => user.age >= 18)
  .map((user) => `<li>${user.name}</li>`);

const userLIstHTML = `<ol>${userList.join("")}</ol>`;

console.log(userLIstHTML); // <ol><li>Alice</li><li>Charlie</li><li>Eve</li></ol>

// Crear array de usuarios con un nuevo campo "isAdult"
const usersWithIsAdult = users.map((user) => ({
  ...user,
  isAdult: user.age >= 18,
}));
console.log(usersWithIsAdult);
