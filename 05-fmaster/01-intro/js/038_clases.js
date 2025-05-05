/**
 ** 📌 Estructura de una clase:
 * - Definición: Se utiliza la palabra clave 'class' seguida del nombre de la clase.
 * - Propiedades: Son variables asociadas con la clase, que describen los atributos o características de los objetos que se crearán.
 * - Constructor: Método especial que se ejecuta en el momento de crear un nuevo objeto, sirve para inicializar las propiedades del objeto.
 * - Métodos: Son funciones asociadas con la clase, que describen las acciones que los objetos pueden realizar.
 */

// Definición de la clase Usuario.
class Usuario {
  // Propiedad 'tipo' con valor por defecto "usuario".
  tipo = "usuario";

  // Constructor que inicializa las propiedades 'nombre' y 'apellido'.
  constructor(nombre, apellido) {
    this.nombre = nombre; // Asigna el valor del parámetro 'nombre' a la propiedad 'nombre'.
    this.apellido = apellido; // Asigna el valor del parámetro 'apellido' a la propiedad 'apellido'.
    console.log("Nuevo usuario registrado!"); // Imprime un mensaje en la consola.
  }

  // Método obtenerNombreCompleto que devuelve el nombre completo del usuario.
  obtenerNombreCompleto() {
    console.log("Obteniendo datos..."); // Imprime un mensaje en la consola.
    return `${this.nombre} ${this.apellido}`; // Devuelve el nombre completo utilizando template strings.
  }
}

// Creación de un nuevo objeto usuario1 de la clase Usuario, utilizando la palabra clave 'new'.
const usuario1 = new Usuario("Charlie", "Brown");
console.log(`${usuario1.nombre} ${usuario1.apellido}`); // Imprime el nombre y apellido del usuario1.

// Creación de un nuevo objeto usuario2 y obtención del nombre completo utilizando el método obtenerNombreCompleto.
const usuario2 = new Usuario("Sally", "Brown");
console.log(usuario2.obtenerNombreCompleto()); // Imprime el nombre completo del usuario2.

// Obtención del nombre completo del usuario1 utilizando el método obtenerNombreCompleto.
console.log(usuario1.obtenerNombreCompleto()); // Imprime el nombre completo del usuario1.
