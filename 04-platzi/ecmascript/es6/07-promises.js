// Promesas en ECMAScript 6 (ES6)
/* Las Promesas son una forma de manejar operaciones asincrónicas en
 * JavaScript, proporcionando una manera más limpia y flexible de manejar el éxito o el fracaso de operaciones asincrónicas en comparación con los callbacks tradicionales.*/

// Definición de la función 'anotherFunction' que retorna una Promise.
const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    // Se crea una nueva Promise, que recibe dos funciones: 'resolve' y 'reject'.
    if (true) {
      // Simula una condición de éxito.
      resolve("Yeah!!"); // Si la condición es verdadera, se llama a 'resolve' con un mensaje de éxito.
    } else {
      reject("Uuch!"); // Si la condición es falsa, se llama a 'reject' con un mensaje de error.
    }
  });
};

// Llamada a 'anotherFunction' que retorna una Promise.
/* Se encadena la llamada a 'then' para manejar la resolución exitosa de la Promise,
 * y la llamada a 'catch' para manejar el rechazo de la Promise.*/
anotherFunction()
  .then((response) => console.log(response)) // En caso de éxito, se imprime el mensaje de éxito en la consola.
  .catch((err) => console.error(err)); // En caso de error, se imprime el mensaje de error en la consola.
