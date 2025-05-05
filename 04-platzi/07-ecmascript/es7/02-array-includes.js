/**
 * Método includes()
 * - Definición:
 *   El método includes() determina si un array incluye un determinado elemento,
 *   devuelve true si el elemento se encuentra en el array, y false en caso contrario.
 * - Sintaxis:
 *   array.includes(elementoABuscar[, desdeIndice])
 *   - elementoABuscar: El elemento que se desea encontrar en el array.
 *   - desdeIndice (opcional): La posición en el array desde donde se empieza a buscar.
 *     Por defecto es 0, lo que significa que se busca desde el inicio del array.
 *
 * Ejemplo:
 *
 */

// Definiendo un array de números.
let numbers = [1, 3, 4, 5, 6, 7, 8];

// Comprobando si el número 4 está en el array, devuelve true ya que 4 está en el array.
console.log(numbers.includes(4)); // Output: true

// Comprobando si el número 2 está en el array, devuelve false ya que 2 no está en el array.
console.log(numbers.includes(2)); // Output: false

// Definiendo un array de nombres.
let names = ["Charlie", "Lucy", "Sally"];

// Comprobando si "Lucy" está en el array, devuelve true ya que "Lucy" está en el array.
console.log(names.includes("Lucy")); // Output: true

// Comprobando si "sally" está en el array, devuelve false ya que "sally" (con s minúscula) no está en el array.
// El método es sensible a las mayúsculas y minúsculas.
console.log(names.includes("sally")); // Output: false

// Comprobando si "Snoopy" está en el array, devuelve false ya que "Snoopy" no está en el array.
console.log(names.includes("Snoopy")); // Output: false
