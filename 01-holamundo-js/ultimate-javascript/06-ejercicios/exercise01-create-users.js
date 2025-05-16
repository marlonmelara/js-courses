// Ejercicio 1: Crear usuarios

// Función constructora para crear un nuevo usuario
function User(name) {
  this.id = Math.floor(Math.random() * 1000);
  this.name = name;
}

// Creación de usuarios a partir de la función constructora
let user1 = new User("Snoopy");
let user2 = new User("Charlie Brown");
let user3 = new User("Linus");

console.log(user1, user2, user3);
