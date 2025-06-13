// Evaluar si el array cumple con todas o al menos una característica

// Método .every()
const users = [
  { id: 1, name: "Snoopy", active: true },
  { id: 2, name: "Charlie Brown", active: true },
  { id: 3, name: "Linus", active: false },
  { id: 4, name: "Lucy", active: true },
  { id: 5, name: "Woodstock", active: true },
];

// Verificar si todos los usuarios están activos
const allActive = users.every((user) => user.active);
console.log(allActive); // false

// Verificar si todos los usuarios tienen un id mayor a 0
const allIdsPositive = users.every((user) => user.id > 0);
console.log(allIdsPositive); // true

// Verificar si todos los usuarios tienen un nombre
const allHaveNames = users.every((user) => user.name);
console.log(allHaveNames); // true

// Método .some()
// Verificar si al menos un usuario está activo
const someActive = users.some((user) => user.active);
console.log(someActive); // true

// Verificar si al menos un usuario tiene un id mayor a 3
const someIdsGreaterThan = users.some((user) => user.id > 3);
console.log(someIdsGreaterThan); // true

// Verificar si al menos un usuario tiene un nombre que comienza con "S"
const someNamesStartWith = users.some((user) => user.name.startsWith("S"));
console.log(someNamesStartWith); // true

// Verificar si al menos un usuario tiene un id impar
const someIdsOdd = users.some((user) => user.id % 2 !== 0);
console.log(someIdsOdd); // true

// Verificar si al menos un usuario tiene un nombre con más de 5 caracteres
const someNamesLongerThan = users.some((user) => user.name.length > 5);
console.log(someNamesLongerThan); // false

// Verificar si al menos un usuario tiene un nombre que contiene la letra "o"
const someNamesContain = users.some((user) => user.name.includes("o"));
console.log(someNamesContain); // true
