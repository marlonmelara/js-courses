/*
 * 📌 Callbacks:
 * - Un callback es una función que se pasa como argumento a otra función,
 *   y que será ejecutada después de que la función contenedora haya finalizado.
 * - Es una forma de asegurar la secuencia en la ejecución de código asincrónico.
 */

// Definición de la función obtenerPostDeUsuario, que acepta un nombre de usuario y un callback como argumentos.
const obtenerPostDeUsuario = (usuario, callback) => {
  // Mensaje en consola indicando el inicio de la obtención de posts.
  console.log(`Obteniendo los posts de ${usuario} ...`);

  // Simulación de una operación asincrónica (como una solicitud a una API) con setTimeout.
  setTimeout(() => {
    // Definición de una lista de posts.
    let posts = ["Post1", "Post2", "Post3"];
    // Llamada al callback con los posts como argumento, una vez que la operación asincrónica ha finalizado.
    callback(posts);
  }, 1000); // La operación asincrónica se simula con un retardo de 1 segundo (1000 milisegundos).
};

// Llamada a obtenerPostDeUsuario, pasando el nombre de usuario "Charlie" y un callback que imprime los posts en consola.
obtenerPostDeUsuario("Charlie", (posts) => {
  console.log(posts);
});

/*
 * En este código:
 * - Se define una función llamada obtenerPostDeUsuario que acepta dos argumentos: usuario y callback.
 * - Dentro de obtenerPostDeUsuario, se simula una operación asincrónica con setTimeout,
 *   que después de 1 segundo, genera una lista de posts y luego llama al callback pasando esta lista como argumento.
 * - Se llama a obtenerPostDeUsuario pasando el nombre de usuario "Charlie" y un callback que simplemente imprime
 *   los posts en consola.
 * - Esto demuestra cómo los callbacks pueden ser utilizados para manejar la ejecución de código asincrónico,
 *   asegurando que ciertas operaciones se realicen en el orden deseado.
 */
