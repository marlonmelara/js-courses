/**
 * Método add()
 * - Definición:
 *   El método add() es utilizado para añadir un nuevo elemento con un valor específico al objeto Set.
 *   Si el objeto Set ya contiene el valor especificado, no se añade ningún nuevo elemento.
 *   Este método devuelve el objeto Set, permitiendo así la encadenación de llamadas al método add().
 *
 * Ejemplo:
 *
 */

// Creando un nuevo objeto Set vacío llamado 'list'.
const list = new Set(["hola", "amigos"]);

// Utilizando el método add() para añadir el elemento "Item1" al objeto Set 'list'.
list.add("Item1");

// Encadenando llamadas al método add() para añadir los elementos "Item2" y "Item3" al objeto Set 'list'.
// Como el método add() devuelve el objeto Set, es posible encadenar varias llamadas a add().
list.add("Item2").add("Item3");

// Imprimiendo en consola el objeto Set 'list' que ahora contiene los elementos "Item1", "Item2" y "Item3".
console.log(list); // Output: Set { 'hola', 'amigos', 'Item1', 'Item2', 'Item3' }
