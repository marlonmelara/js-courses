/**
 * Función generador (Generator Function)
 * - Definición:
 *   Una función generador es una función especial en JavaScript que permite pausar la ejecución
 *   y luego reanudarla en una etapa posterior. Se define usando la sintaxis function* (function keyword seguido de un asterisco).
 *   Los generadores producen una secuencia de valores en lugar de un solo valor, entregando un nuevo valor en cada iteración.
 *
 * En este código, la función generador 'iterate' recibe un arreglo como argumento y utiliza un bucle for...of
 * para iterar sobre los elementos del arreglo.
 * La palabra clave 'yield' se utiliza para "producir" un valor y pausar la ejecución de la función
 * hasta que se solicite el siguiente valor.
 *
 */

function* iterate(array) {
  // El bucle for...of itera sobre cada valor del arreglo proporcionado.
  for (let value of array) {
    // 'yield' produce el valor actual de la iteración y pausa la ejecución de la función generador.
    yield value;
  }
}

// Creando una instancia del objeto generador llamando a la función 'iterate' con un arreglo como argumento.
const it = iterate(["Snoopy", "Charlie", "Lucy"]);

// Utilizando el método 'next()' del objeto generador para obtener el siguiente valor producido por 'yield'.
// El método 'next()' devuelve un objeto con dos propiedades: 'value', que contiene el valor producido,
// y 'done', que es un booleano indicando si la función generador ha completado su ejecución.
console.log(it.next().value); // Output: Snoopy
console.log(it.next().value); // Output: Charlie
console.log(it.next().value); // Output: Lucy
console.log(it.next().value); // Output: undefined, ya que no hay más valores en el arreglo.
