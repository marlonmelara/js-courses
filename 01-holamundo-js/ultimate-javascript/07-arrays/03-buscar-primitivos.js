// Buscar un elemento primitivo en un array

const letters = ["a", "b", "c", "d", "e"];

// Busca el índice de 'c'
const index = letters.indexOf("c");
console.log(index); // 2

console.log(letters.indexOf("f")); // -1 (no encontrado)

letters.push("f"); // Agrega 'f' al final del array
letters.unshift("f"); // Agrega 'f' al principio del array

console.log(letters.indexOf("f")); // 0 (encontrado al principio)
console.log(letters.lastIndexOf("f")); // 5 (encontrado al final)
console.log(letters.indexOf("f", 2)); // 5 (busca desde el índice 2)

// Algunos programadores hacian una verificación usando ! ==
console.log(letters.indexOf("c") !== -1); // true (encontrado)
console.log(letters.indexOf("f") !== -1); // true (encontrado)

// Sin embargo, es más común usar una verificación directa con el valor booleano
console.log(letters.includes("c")); // true (encontrado)

const fruits = ["apple", "banana", "orange", "apple", "grape"];

// Buscando un string
console.log(fruits.indexOf("banana")); // Salida: 1 (índice donde se encuentra 'banana')
console.log(fruits.indexOf("apple")); // Salida: 0 (la primera ocurrencia de 'apple')
console.log(fruits.lastIndexOf("apple")); // Salida: 3 (busca la última ocurrencia de 'apple')
console.log(fruits.indexOf("kiwi")); // Salida: -1 (no se encuentra 'kiwi')

// Buscando desde un índice específico
console.log(fruits.indexOf("apple", 1)); // Salida: 3 (busca 'apple' desde el índice 1)

const numbers = [10, 20, 30, 10];
console.log(numbers.indexOf(20)); // Salida: 1

// Con objetos, indexOf busca la misma referencia, no el contenido
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 1 }; // Aunque tiene el mismo contenido que obj1, es un objeto diferente en memoria

const objects = [obj1, obj2];
console.log(objects.indexOf(obj1)); // Salida: 0 (encuentra la misma referencia)
console.log(objects.indexOf(obj3)); // Salida: -1 (obj3 es una referencia diferente, aunque su contenido sea similar a obj1)
