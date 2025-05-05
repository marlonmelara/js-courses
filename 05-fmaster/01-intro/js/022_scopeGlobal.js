/*
 * Global Scope o Variables Globales:
 * - Son las variables declaradas fuera de una función.
 * - Podemos acceder a ellas desde cualquier parte del código.
 * - Podemos usar const, let y var para declarar variables globales.
 */

// Declaración de una variable global 'nombre' usando 'var'.
// Al estar definida fuera de cualquier función, 'nombre' es una variable global.
var nombre = "Goku";

// Acceso a la variable global 'nombre' y se imprime su valor en la consola.
// Output: "Goku"
console.log(nombre);

/**
 * Función 'saludo' que accede y modifica la variable global 'nombre'.
 * Imprime mensajes de saludo en la consola utilizando el valor actual de 'nombre'.
 */
const saludo = () => {
  // Acceso a la variable global 'nombre' y se imprime un mensaje de saludo en la consola.
  // Output: "¡Hola Goku!"
  console.log(`¡Hola ${nombre}!`);

  // Modificación de la variable global 'nombre' a "Lufy".
  nombre = "Lufy";

  // Acceso a la variable global 'nombre' que ahora tiene el valor "Lufy" y se imprime un nuevo mensaje de saludo en la consola.
  // Output: "Hola Lufy, ¿qué hay de nuevo?"
  console.log(`Hola ${nombre}, ¿qué hay de nuevo?`);
};

// Llamada a la función 'saludo' que accede y modifica la variable global 'nombre'.
saludo();
