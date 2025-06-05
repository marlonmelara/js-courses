// Buscar un elemento primitivo en un array

const letters = ["a", "b", "c", "d", "e"];

const index = letters.indexOf("c"); // Busca el índice de 'c'
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
