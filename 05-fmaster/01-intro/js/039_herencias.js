/**
 ** 📌 Herencia:
 * - La herencia es una característica de la programación orientada a objetos que permite crear una nueva clase a partir de una clase existente.
 * - La nueva clase hereda todas las propiedades y métodos de la clase existente y puede tener propiedades y métodos adicionales o sobrescribir los heredados.
 * - En JavaScript, se utiliza la palabra clave 'extends' para indicar que una clase hereda de otra, y 'super' para llamar al constructor de la clase padre.
 */

// Definición de la clase Usuario.
class Usuario {
  // Constructor que inicializa las propiedades 'usuario' y 'password'.
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
  }

  // Método obtenerPost que devuelve un arreglo de posts.
  obtenerPost() {
    const posts = ["post1", "post2"];
    return posts;
  }
}

// Definición de la clase Moderador que hereda de Usuario.
class Moderador extends Usuario {
  // Constructor que inicializa las propiedades 'usuario', 'password' y 'permisos'.
  constructor(usuario, password, permisos) {
    super(usuario, password); // Llama al constructor de Usuario para inicializar 'usuario' y 'password'.
    this.permisos = permisos; // Inicializa la propiedad 'permisos' con el valor del parámetro 'permisos'.
  }

  // Método borrarPost que permite borrar un post si el moderador tiene el permiso 'borrar'.
  borrarPost(id) {
    if (this.permisos.includes("borrar")) {
      // Verifica si el arreglo de permisos incluye 'borrar'.
      console.log(`El post con el ${id} ha sido borrado`); // Imprime un mensaje indicando que el post ha sido borrado.
    } else {
      console.log("No tienes los permisos"); // Imprime un mensaje indicando que no se tienen los permisos necesarios.
    }
  }
}

// Creación de un objeto usuario1 de la clase Usuario.
const usuario1 = new Usuario("Bruce", "batman123");
console.log(usuario1.obtenerPost()); // Imprime el arreglo de posts.
console.log(usuario1.permisos); // Imprime 'undefined' porque la clase Usuario no tiene la propiedad 'permisos'.

// Creación de un objeto usuario2 de la clase Moderador.
const usuario2 = new Moderador("Jason", "robin123", ["editar", "borrar"]);
console.log(usuario2.obtenerPost()); // Imprime el arreglo de posts heredado de Usuario.
console.log(usuario2.permisos); // Imprime el arreglo de permisos ['editar', 'borrar'].
usuario2.borrarPost(3); // Intenta borrar el post con id 3, e imprime el mensaje indicando que el post ha sido borrado.
