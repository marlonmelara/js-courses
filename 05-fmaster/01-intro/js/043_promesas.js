/*
 * En este código se está utilizando una Promesa para simular una operación de obtención de datos (como podría ser una solicitud a una API).
 * La Promesa se define dentro de la función fetchPosts, que luego es llamada para iniciar el proceso.
 */

// Definición de la función fetchPosts que retorna una nueva Promesa.
const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    // Simulación de una operación asíncrona con setTimeout.
    setTimeout(() => {
      // Datos ficticios que se desearían obtener.
      const posts = ["Post1", "Post2", "Post3"];
      // Variable error para simular un error en la obtención de los datos.
      const error = true;

      // Si hay un error (error es true), se llama a reject y se pasa un mensaje de error.
      if (error) {
        reject("Hubo un error al intentar obtener los posts");
      }
      // Si no hay un error (error es false), se llama a resolve y se pasan los datos obtenidos.
      else {
        resolve(posts);
      }
    }, 2000); // La operación asíncrona se simula con un retardo de 2 segundos (2000 milisegundos).
  });
};

// Llamada a la función fetchPosts que retorna una Promesa.
fetchPosts()
  // Manejo de la resolución de la Promesa con '.then()', que recibe los datos obtenidos y los imprime en la consola.
  .then((posts) => {
    console.log(posts);
  })
  // Manejo del rechazo de la Promesa con '.catch()', que recibe el mensaje de error y lo imprime en la consola.
  .catch((error) => {
    console.log(error);
  });

/*
 * En este código:
 * - Se define una función fetchPosts que retorna una nueva Promesa.
 * - Dentro de la Promesa se simula una operación de obtención de datos con setTimeout.
 * - Se verifica si hubo un error en la obtención de los datos usando una variable error.
 * - Si hay un error, se llama a 'reject' con un mensaje de error.
 * - Si no hay un error, se llama a 'resolve' con los datos obtenidos.
 * - Se llama a la función fetchPosts, y se utilizan los métodos '.then()' y '.catch()'
 *   para manejar la resolución y el rechazo de la Promesa, imprimiendo los datos obtenidos o el mensaje de error en la consola.
 */
