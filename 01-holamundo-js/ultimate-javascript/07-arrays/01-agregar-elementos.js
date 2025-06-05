// Vamos a conocer cómo agregar elementos a un array en JavaScript por medio de algunos métodos.

const letters = ["a", "b", "c"];

// 1. push() - Agrega uno o más elementos al final del array
letters.push("d"); // Agrega 'd' al final del array
console.log(letters); // ['a', 'b', 'c', 'd']

// 2. unshift() - Agrega uno o más elementos al inicio del array
letters.unshift("y", "z"); // Agrega 'y' y 'z' al inicio del array
console.log(letters); // ['y','z', 'a', 'b', 'c', 'd']

// 3. splice() - Agrega uno o más elementos en una posición específica
letters.splice(2, 0, 1, 2); // Agrega 1 y 2 en la posición 2 (desplaza los demás elementos)
console.log(letters); // ['y', 'z', 1, 2, 'a', 'b', 'c', 'd']
