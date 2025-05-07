let obj1 = {}; // Crea un objeto vacío
let obj2 = new Object(); // Crea un objeto vacío, pero es más lento que el anterior. Usar {} es más rápido y recomendado.
let obj3 = Object.create(null); // Crea un objeto sin prototipo

// Otros metodos para crear objetos
let obj4 = new Array(); // Crea un objeto de tipo Array
let obj5 = new Date(); // Crea un objeto de tipo Date
let obj6 = new RegExp(); // Crea un objeto de tipo RegExp
let obj7 = new Map(); // Crea un objeto de tipo Map
let obj8 = new Set(); // Crea un objeto de tipo Set
let obj9 = new WeakMap(); // Crea un objeto de tipo WeakMap
let obj10 = new String(); // Crea un objeto de tipo String
let obj11 = new Number(); // Crea un objeto de tipo Number
let obj12 = new Boolean(); // Crea un objeto de tipo Boolean
let obj13 = new Function(); // Crea un objeto de tipo Function

function User(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    // Esto es un método del objeto
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

let user1 = new User("Juan", 30); // Crea un nuevo objeto usando la función constructor. Se usa la palabra reservada new para crear una nueva instancia de un objeto.

console.log(user1.constructor); // [Function: User]
console.log(user1.constructor.name); // User

let user2 = new User("Pedro", 25);

// Demuestra la diferencia entre un string primitivo y un objeto String usando valueOf()
const str1 = "1 + 1"; // String primitivo
const str2 = new String("1 + 1"); // Objeto String

console.log(str1); // '1 + 1' → muestra el valor directamente
console.log(str2); // [String: '1 + 1'] → muestra el objeto String

console.log(str1 == str2); // true → compara los valores (el objeto se convierte a primitivo)

console.log(str1 === str2); // false → tipos distintos (string vs objeto)

console.log(str2.valueOf()); // '1 + 1' → extrae el valor primitivo del objeto String

console.log(str1 === str2.valueOf()); // true → ahora son del mismo tipo (string vs string primitivo)

console.log(str1 == str2.valueOf()); // true → compara los valores (el objeto se convierte a primitivo)
