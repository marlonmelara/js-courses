// Crear un nuevo objeto con el constructor 'new Object()' es funcionalmente
// equivalente a crear un objeto con la notación literal '{}'.
const person1 = new Object(); // Crea un objeto vacío
console.log(person1); // Imprime un objeto vacío: {}

// Crear un objeto con la notación literal '{}' es más conciso y es la forma preferida.
const person2 = {}; // Crea otro objeto vacío utilizando notación literal
console.log(person2); // Imprime un objeto vacío: {}

// Comprobamos que person2 es de hecho una instancia de Object.
console.log(person2.constructor); // Imprime la función constructora de 'person2', que es Object
console.log(person2.constructor === Object); // true, confirma que el constructor de 'person2' es Object

// Es preferible usar la notación literal '{}' para crear objetos porque es más breve y legible.
// La notación de 'new Object()' es menos común y generalmente no se recomienda por razones de brevedad y claridad.

// Object crea un número con características de un objeto
let number = new Object(3);
console.log(number); // [Number: 3]

// Añadimos una propiedad al objeto number
number.isSpecial = true;

// Añadimos un método al objeto number
number.show = function () {
  return `El número es ${this.valueOf()}`;
};

// Ahora intentamos acceder a la propiedad y al método
console.log(number.isSpecial); // true
console.log(number.show()); // 'El número es 3'

// Sin embargo, después de sumar 1, number ya no es un objeto
number += 1;
console.log(number.isSpecial); // undefined
console.log(number.show); // TypeError: number.show is not a function
console.log(number); //4

// Object crea un string con características de un objeto
const greeting = new Object("Hello");
greeting.name = "Special Greeting";
console.log(greeting);

greeting.test = function () {
  return `${greeting}, world!`;
};
console.log(greeting.test()); // 'Hello, world!'
console.log(greeting.name); // 'Special Greeting'
