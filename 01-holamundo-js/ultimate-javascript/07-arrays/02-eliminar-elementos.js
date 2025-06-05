// Vamos a conocer cómo eliminar elementos de un array en JavaScript por medio de algunos métodos.

const letters = ["a", "b", "c", "d", "e"];

// 1. pop() - Elimina el último elemento del array
const lastElement = letters.pop(); // Elimina 'e'
console.log(lastElement, letters); // 'e', ['a', 'b', 'c', 'd']

// 2. shift() - Elimina el primer elemento del array
const firstElement = letters.shift(); // Elimina 'a'
console.log(firstElement, letters); // 'a', ['b', 'c', 'd']

// 3. splice() - Elimina uno o más elementos en una posición específica
letters.splice(1, 1); // Elimina el elemento en la posición 1 ('c')
console.log(letters); // ['b', 'd']
