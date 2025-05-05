// Forma #1
/**
 * Función 'saludo' que imprime el mensaje "Hola!" en la consola.
 * Esta es una función declarada, que se define usando la palabra clave 'function' seguida del nombre de la función.
 */
function saludo() {
  console.log("Hola!"); // Imprime "Hola!" en la consola.
}

saludo(); // Llamada a la función 'saludo'.

// Forma #2 - Asignando una función a una variable
/**
 * Función anónima asignada a la variable 'digoHola'.
 * Esta función imprime el mensaje "Saludo desde una variable!🤖" en la consola.
 * Es anónima porque no tiene un nombre después de la palabra clave 'function'.
 */
const digoHola = function () {
  console.log("Saludo desde una variable!🤖"); // Imprime "Saludo desde una variable!🤖" en la consola.
};

digoHola(); // Llamada a la función almacenada en la variable 'digoHola'.

// Forma #3 - Función de tipo flecha (fat arrow function)
/**
 * Función de tipo flecha (fat arrow function) 'saludoMundo' que imprime el mensaje "Hello, world" en la consola.
 * Las funciones de flecha son una sintaxis más concisa para escribir funciones en JavaScript,
 * introducida en ECMAScript 6 (ES6).
 */
const saludoMundo = () => {
  console.log("Hello, world"); // Imprime "Hello, world" en la consola.
};

saludoMundo(); // Llamada a la función 'saludoMundo'.
