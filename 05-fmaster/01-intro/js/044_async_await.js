/*
 * 📌 Función async/await:
 * - La sintaxis async/await permite trabajar con promesas de una manera más limpia y legible,
 *   haciendo que el código asíncrono parezca sincrónico.
 * - 'async' se coloca antes de la definición de la función para indicar que la función retornará una promesa.
 * - 'await' se utiliza dentro de la función async para esperar a que una promesa se resuelva antes de continuar con la ejecución del código.
 */

/*
 * En este código se introduce la sintaxis async/await para trabajar con operaciones asíncronas y Promesas de una manera más limpia y legible.
 */

// Se define una función fetchPosts que retorna una Promesa.
const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post1", "Post2", "Post3"]; // Datos ficticios a obtener.
      const error = true; // Variable para simular un error en la obtención de los datos.

      // Si hay un error, se llama a reject con un mensaje de error.
      if (error) {
        reject("Hubo un error al intentar obtener los posts");
      }
      // Si no hay un error, se llama a resolve con los datos obtenidos.
      else {
        resolve(posts);
      }
    }, 2000); // Simulación de operación asíncrona con un retardo de 2 segundos.
  });
};

console.log("Inicia operación"); // Mensaje de inicio de operación.

// Se define una función mostrarPosts como una función async.
const mostrarPosts = async () => {
  try {
    // Se usa await para esperar a que la Promesa fetchPosts se resuelva antes de continuar.
    const posts = await fetchPosts();
    console.log(posts); // Se imprime en consola los datos obtenidos.
  } catch (error) {
    // En caso de error, se captura con catch y se imprime el mensaje de error en consola.
    console.log(error);
  }
  console.log("Finaliza operación"); // Mensaje de finalización de operación.
};

mostrarPosts(); // Llamada a la función mostrarPosts.

/*
 * En este código:
 * - Se define una función fetchPosts que retorna una nueva Promesa.
 * - Se imprime un mensaje de inicio de operación en la consola.
 * - Se define una función mostrarPosts como una función async, lo que permite usar la palabra clave await dentro de ella.
 * - Dentro de mostrarPosts, se usa await para esperar a que la Promesa fetchPosts se resuelva,
 *   y luego se imprime en consola los datos obtenidos.
 * - En caso de error (si la Promesa es rechazada), se captura el error con un bloque catch y se imprime el mensaje de error en consola.
 * - Se imprime un mensaje de finalización de operación en la consola.
 * - Se llama a la función mostrarPosts para iniciar la operación.
 */
