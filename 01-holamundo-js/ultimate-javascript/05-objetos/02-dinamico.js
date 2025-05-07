// En JavaScript, los objetos son colecciones de propiedades y métodos. Se pueden crear objetos de forma literal o mediante la función Object().
// Se pueden agregar, modificar y eliminar propiedades y métodos de un objeto en cualquier momento. Esto se conoce como objetos dinámicos.

const user = {
  id: 1,
  name: "Snoopy",
  age: 5,
};

// Se pueden agregar propiedades y métodos a un objeto después de su creación. Esto se conoce como objetos dinámicos. Por ejemplo:
user.name = "Charlie Brown";
user.saveUser = function () {
  console.log("Saving user " + user.name);
};

user.saveUser(); // Saving user Charlie Brown

// Se pueden eliminar propiedades de un objeto usando el operador delete. Por ejemplo:
delete user.age; // Eliminar la propiedad age
console.log(user.age); // undefined
console.log(user); // { id: 1, name: 'Charlie Brown', saveUser: [Function] }

// Con Object.freeze() se puede congelar un objeto y no se pueden modificar sus propiedades. Esto es útil cuando se quiere proteger un objeto de cambios accidentales o no deseados.
const user2 = Object.freeze({
  id: 2, // Se congela el objeto y no se puede modificar
  name: "Lucy",
  saveUser: function () {
    console.log("Saving user " + user2.name);
  },
});

console.log(user2); // { id: 2, name: 'Lucy', age: 6 }
user2.name = "Linus"; // No se puede modificar la propiedad name
console.log(user2); // { id: 2, name: 'Lucy', age: 6 }

// Se puede usar Object.seal() para sellar un objeto y evitar que se agreguen nuevas propiedades, pero se pueden modificar las existentes. Esto es útil cuando se quiere proteger la estructura del objeto, pero se permite la modificación de sus propiedades.
const user3 = Object.seal({
  id: 3, // Se sella el objeto y no se pueden agregar nuevas propiedades
  name: "Snoopy",
  age: 5,
});

console.log(user3); // { id: 3, name: 'Snoopy', age: 5 }
user3.name = "Charlie Brown"; // Se puede modificar la propiedad name
user3.age = 6; // Se puede modificar la propiedad age
console.log(user3); // { id: 3, name: 'Charlie Brown', age: 6 }
user3.email = "charlie@mail.com"; // No se puede agregar la propiedad email
console.log(user3); // { id: 3, name: 'Charlie Brown', age: 6 }
