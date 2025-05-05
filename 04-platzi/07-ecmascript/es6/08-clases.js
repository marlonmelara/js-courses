// Definiendo la clase User con un constructor para aceptar un nombre
class User {
  // Constructor
  constructor(name) {
    // 'this' se refiere al objeto actual que está siendo creado por la clase.
    // Aquí, 'this.name' crea una propiedad 'name' en el objeto y le asigna el valor del argumento 'name'.
    this.name = name;
    console.log("Nuevo usuario registrado!");
  }

  // Getter para la propiedad 'name'.
  // Esto permite acceder al valor de '_name' a través de 'name'.
  get name1() {
    console.log("Obteniendo el nombre...");
    return this.name;
  }

  // Setter para la propiedad 'name'.
  // Esto permite cambiar el valor de '_name' a través de 'name'.
  set name1(newName) {
    console.log("Estableciendo un nuevo nombre...");
    this.name = newName;
  }

  // Métodos
  greeting() {
    return `Hola, soy ${this.name}`; // Accediendo a la propiedad name del objeto para incluirlo en el saludo
  }
}

// Creando instancias de User con nombres específicos
const usuario1 = new User("Charlie");
console.log(usuario1.greeting()); // Output: Hola, soy Charlie

// Utilizando el getter para obtener el nombre
console.log(usuario1.name1); // Output: Obteniendo el nombre... Charlie

// Utilizando el setter para cambiar el nombre
usuario1.name1 = "Snoopy";
console.log(usuario1.greeting()); // Output: Hola, soy Snoopy

const usuario2 = new User("Linus");
console.log(usuario2.greeting()); // Output: Hola, soy Linus
