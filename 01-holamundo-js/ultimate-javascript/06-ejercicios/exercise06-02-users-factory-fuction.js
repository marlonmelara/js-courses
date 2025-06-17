// Ejercicio 2: Crear usuarios con una factory function

// Factory function para crear un nuevo usuario como un objeto literal
function createUser(name) {
  return {
    id: Math.floor(Math.random() * 1000),
    name: name,
    greet: function () {
      console.log(`Hello, my name is ${this.name}`);
    },
  };
}

let user1 = createUser("Snoopy");
let user2 = createUser("Charlie Brown");
let user3 = createUser("Linus");
console.log(user1, user2, user3);
user1.greet();
