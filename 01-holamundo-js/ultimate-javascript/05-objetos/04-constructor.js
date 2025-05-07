// Funciones Constructor
// En JavaScript, una función constructor es una función que se utiliza para crear objetos.
// Se define con la primera letra en mayúscula y se invoca con el operador new.

function User(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    // Esto es un método del objeto
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

// Crear un nuevo objeto usando la función constructor. Se usa la palabra reservada new para crear una nueva instancia de un objeto.
const user1 = new User("Juan", 30);

console.log(user1); // { nombre: 'Juan', edad: 30, saludar: [Function] }
console.log(user1.nombre); // Juan
console.log(user1.edad); // 30
user1.saludar(); // Hola, mi nombre es Juan y tengo 30 años.
