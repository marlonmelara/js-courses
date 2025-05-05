// Var
var firstName; // Undefined
firstName = "Charlie";
console.log(firstName);

var lastName = "Connor"; // Declarar y asignar
lastName = "Brown"; // Reasignar
console.log(lastName);

var secondName = "Xavi"; // Declarar y asignar
var secondName = "Peter"; // Reasignar
console.log(secondName);

// Let
let fruit = "Apple"; // Declarar y asignar
fruit = "Kiwi"; // Reasignar
console.log(fruit);

// let fruit = "Banana"; // Cannot redeclare block-scoped variable

// const
const animal = "dog"; // Declarar y asignar
console.log(animal);
// animal = "cat"; // TypeError: Assignment to constant variable
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
