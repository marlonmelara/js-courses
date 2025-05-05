/*
 * 📌 Métodos y propiedades estáticos:
 * - Los métodos y propiedades estáticos pertenecen a la clase misma, no a una instancia particular.
 * - Se definen usando la palabra clave 'static'.
 * - Se accede a ellos usando el nombre de la clase en lugar del objeto.
 */

// Definición de la clase Usuario.
class Usuario {
  // Constructor que inicializa las propiedades 'nombre' y 'correo'.
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  // Método estático borrar que toma un id_usuario como argumento.
  static borrar(id_usuario) {
    // Imprime un mensaje indicando que el usuario ha sido borrado.
    console.log(
      `El usuario con el id: ${id_usuario} ha sido borrado de la base de datos`
    );
  }

  // Propiedad estática registrados inicializada con el valor 1000.
  static registrados = 1000;
}

// Se comenta el código que crea un objeto usuario y intenta llamar al método estático a través del objeto, lo cual no es correcto.
// const usuario = new Usuario("Lufi", "reydelospiratas@onepiece.com");
// Usuario.borrar(1);

// Llamada correcta al método estático borrar usando el nombre de la clase Usuario.
Usuario.borrar(1);

// Acceso a la propiedad estática registrados usando el nombre de la clase Usuario y se imprime en consola.
console.log(`Hay ${Usuario.registrados} registrados`);

/*
 * En este código:
 * - Se define una clase Usuario con un constructor, un método estático 'borrar' y una propiedad estática 'registrados'.
 * - Se muestra cómo llamar a un método estático y acceder a una propiedad estática usando el nombre de la clase.
 * - Se comenta un ejemplo incorrecto de cómo no se debe llamar a un método estático.
 */
