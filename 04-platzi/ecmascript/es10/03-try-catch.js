//try...catch es una característica de manejo de errores en JavaScript. ECMAScript 2019 (ES10) introdujo una mejora en la sintaxis catch, permitiendo que los desarrolladores omitan la declaración del error si no van a utilizarlo.

// Primer bloque try-catch.
try {
  hello(); // Intenta ejecutar la función hello().
} catch (error) {
  // Captura cualquier error lanzado en el bloque try.
  console.log(error); // Imprime el error capturado.
}

// Segundo bloque try-catch con la sintaxis de ES10.
try {
  anotherFn(); // Intenta ejecutar la función anotherFn().
} catch {
  // Captura cualquier error sin necesidad de declarar una variable.
  console.log("⭕ Esto es un error"); // Imprime un mensaje genérico.
}

// En el primer bloque, cualquier error generado por hello() es capturado por catch, y el error se imprime en la consola. En el segundo bloque, el error generado por anotherFn() también es capturado, pero sin la necesidad de declarar una variable para el error. Esto es útil cuando no necesitas detalles sobre el error capturado.

// La desventaja principal del segundo try...catch es que no proporciona información específica sobre el error. Mientras que el primer bloque catch te permite acceder a detalles del error (como su mensaje o pila de llamadas), el segundo bloque omite estos detalles, lo que puede dificultar la depuración y el manejo de errores específicos.
