/**
 * 📌 Ciclo while
 * El ciclo while evalúa una condición y ejecuta el bloque de código asociado mientras la condición sea verdadera.
 * La condición se evalúa antes de la ejecución del bloque de código.
 */

let i = 0;

while (i <= 10) {
  // Mientras 'i' sea menor o igual a 10, se ejecutará el bloque de código
  console.log(i); // Imprime el valor actual de 'i' en la consola
  i++; // Incrementa 'i' en 1 para la próxima iteración
}

/**
 * 📌 Do while
 * El ciclo do-while ejecuta el bloque de código una vez, y luego repite la ejecución mientras la condición sea verdadera.
 * La condición se evalúa después de la ejecución del bloque de código, asegurando al menos una ejecución del bloque.
 */

let contador = 50;

do {
  console.log(contador); // Imprime el valor actual de 'contador' en la consola
  contador++; // Incrementa 'contador' en 1 para la próxima iteración
} while (contador <= 10); // Ahora la condición evalúa 'contador'

/**
 * Aunque los ciclos while y do-while son válidos en JavaScript, en la práctica, el ciclo for es más comúnmente usado
 * debido a su flexibilidad y claridad en la definición de la inicialización, la condición y la actualización de la variable de control del ciclo.
 */
