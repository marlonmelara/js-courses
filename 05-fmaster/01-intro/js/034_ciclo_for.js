/**
 * 📌 Ciclo for
 * - Repite un bloque de código mientras cumpla una condición.
 * - Expresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
 * - Expresión 2: Una condición, mientras se cumpla se ejecutará el bloque de código.
 * - Expresión 3: Esta expresión se ejecuta siempre y después de que se ejecute el bloque de código.
 *
 * - Cuidado con las condiciones que se agregan para evitar ciclos infinitos
 */

// Ejemplo 1: Imprimir números del 1 al 10
for (
  /* Expresión 1: Inicializa la variable 'numero' con el valor de 1 */
  let numero = 1;
  /* Expresión 2: Verifica si 'numero' es menor que 11, si es verdadero, ejecuta el bloque de código */
  numero < 11;
  /* Expresión 3: Incrementa el valor de 'numero' en 1 después de cada iteración */
  numero++
) {
  /* Bloque de código que se ejecutará: Imprime el valor actual de 'numero' en la consola */
  console.log(numero);
}

// Ejemplo 2: Imprimir números del 0 al 100 en incrementos de 10
for (
  /* Expresión 1: Inicializa la variable 'numero' con el valor de 0 */
  let numero = 0;
  /* Expresión 2: Verifica si 'numero' es menor o igual a 100, si es verdadero, ejecuta el bloque de código */
  numero <= 100;
  /* Expresión 3: Incrementa el valor de 'numero' en 10 después de cada iteración */
  numero = numero + 10
) {
  /* Bloque de código que se ejecutará: Imprime el valor actual de 'numero' en la consola */
  console.log(numero);
}

// Ejemplo 3: Imprimir números del 50 al 0 en decrementos de 10
for (
  /* Expresión 1: Inicializa la variable 'numero' con el valor de 50 */
  let numero = 50;
  /* Expresión 2: Verifica si 'numero' es mayor o igual a 0, si es verdadero, ejecuta el bloque de código */
  numero >= 0;
  /* Expresión 3: Decrementa el valor de 'numero' en 10 después de cada iteración */
  numero = numero - 10
) {
  /* Bloque de código que se ejecutará: Imprime el valor actual de 'numero' en la consola */
  console.log(numero);
}

// Ejemplo 4: Recorriendo un array para obtener su contenido
const nombres = [
  "Charlie",
  "Snoppy",
  "Woodstock",
  "Lucy",
  "Sally",
  "Linus",
  "Patty",
  "Marcie",
  "Snoppy",
  "Schroeder",
  "Franklin",
  123,
];

// Este bucle 'for' recorrerá todos los elementos del array 'nombres', desde el índice 0 hasta el último índice.
for (
  /* Expresión 1: Inicializa la variable 'i' con el valor de 0 */
  let i = 0;
  /* Expresión 2: Verifica si 'i' es menor que la longitud del array 'nombres', si es verdadero, ejecuta el bloque de código */
  i < nombres.length;
  /* Expresión 3: Incrementa el valor de 'i' en 1 después de cada iteración */
  i++
) {
  /* Bloque de código que se ejecutará: Imprime el mensaje 'Hola' seguido del elemento actual del array 'nombres' en la consola */
  console.log(`Hola ${nombres[i]}`);
}

// Ejemplo 5: Si usamos una función

// Definimos una función 'saludarAmigos' que recibe un parámetro 'nombres' y imprime un saludo en la consola.
let saludarAmigos = (nombres) => {
  console.log(`Hola ${nombres}`);
};

// Este bucle 'for' también recorrerá todos los elementos del array 'nombres', desde el índice 0 hasta el último índice.
for (
  /* Expresión 1: Inicializa la variable 'i' con el valor de 0 */
  let i = 0;
  /* Expresión 2: Verifica si 'i' es menor que la longitud del array 'nombres', si es verdadero, ejecuta el bloque de código */
  i < nombres.length;
  /* Expresión 3: Incrementa el valor de 'i' en 1 después de cada iteración */
  i++
) {
  /* Bloque de código que se ejecutará: Llama a la función 'saludarAmigos' con el elemento actual del array 'nombres' como argumento */
  saludarAmigos(nombres[i]);
}

/*
 * En estos ejemplos 4 y 5, se demuestra cómo recorrer un array usando un bucle 'for' y cómo podemos usar una función dentro del bucle
 * para realizar una operación con cada elemento del array.
 */

/**
 * La estructura 'for' es muy útil para ejecutar código repetitivamente bajo una condición específica,
 * permitiendo operaciones como recorrer arreglos, imprimir series numéricas, entre otros.
 */
