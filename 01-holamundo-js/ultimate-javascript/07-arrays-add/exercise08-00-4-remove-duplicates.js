// Ejercicio 00-4:
// Eliminar datos duplicados de un array y entregar un array con los datos depurados

const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

// 1️⃣ - Usando ciclo for y el método includes()
const removeDuplicates = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(array);
console.log(removeDuplicates(array));

// 2️⃣ - Usando Set: más rápida que includes() en arrays grandes.
const removeDuplicatesWithSet = (array) => {
  const uniqueElements = new Set(array); // Crea un Set con elementos únicos
  return Array.from(uniqueElements); // Convierte el Set de nuevo a un Array
};

// Ejemplo de uso:
const originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log("Original array:", originalArray);
console.log("Using Set:", removeDuplicatesWithSet(originalArray));

// 2️⃣-A - Usando Set con operador spread (...) para ser más conciso

const removeDuplicatesConcise = (array) => {
  return [...new Set(array)]; // Esto es equivalente a Array.from(new Set(array))
};

console.log("Using concise Set:", removeDuplicatesConcise(originalArray));

// 3️⃣ - Usando filter() y indexOf()
const removeDuplicatesWithFilter = (array) => {
  return array.filter((value, index, self) => {
    // Si el primer índice del valor es igual al índice actual, significa que es la primera aparición.
    return self.indexOf(value) === index;
  });
};

// Ejemplo de uso:
console.log(
  "Using filter and indexOf:",
  removeDuplicatesWithFilter(originalArray)
);
