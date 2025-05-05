/*
- Parámetros: los valores especificados en la definición de la función.
- Argumentos: los valores que le pasamos a la función cuando la invocamos.
*/

/**
 * Función 'saludo' que imprime un mensaje de saludo en la consola.
 *
 * @param {string} [name="amigo"] - El nombre a ser incluido en el mensaje de saludo. Si no se proporciona un nombre, se usa "amigo" por defecto.
 */
const saludo = (name = "amigo") => {
  console.log(`Hola ${name}`); // Imprime "Hola [nombre]" en la consola, donde [nombre] es el valor del argumento 'name'.
};

saludo("Padme"); // Llamada a la función 'saludo' con el argumento "Padme". Output: "Hola Padme"
saludo(); // Llamada a la función 'saludo' sin argumentos. Usa el valor por defecto "amigo". Output: "Hola amigo"

// Múltiples parámetros

/**
 * Función 'operacion' que realiza una operación matemática (suma o resta) entre dos números y
 * imprime el resultado en la consola.
 *
 * @param {string} tipo - El tipo de operación a realizar, puede ser "suma" o "resta".
 * @param {number} a - El primer número para la operación.
 * @param {number} b - El segundo número para la operación.
 */
const operacion = (tipo, a, b) => {
  if (tipo === "suma") {
    console.log(`El resultado de la suma es ${a + b}`); // Si 'tipo' es "suma", imprime el resultado de sumar 'a' y 'b' en la consola.
  } else if (tipo === "resta") {
    console.log(`El resultado de la resta es ${a - b}`); // Si 'tipo' es "resta", imprime el resultado de restar 'a' y 'b' en la consola.
  }
};

operacion("suma", 2, 5); // Llamada a la función 'operacion' para realizar una suma. Output: "El resultado de la suma es 7"
operacion("resta", 100, 75); // Llamada a la función 'operacion' para realizar una resta. Output: "El resultado de la resta es 25"
