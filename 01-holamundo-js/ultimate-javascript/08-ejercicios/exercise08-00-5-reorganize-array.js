// Ejercicio 00-5:
// Dado un array con ceros y otros números, mover todos los ceros al final sin cambiar el orden del resto

const array = [0, 1, 0, 3, 12, 0, 5];

// 1️⃣ - Usando ciclo for y push()
const moveZerosToEnd = (array) => {
  let zeroCount = 0;
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroCount++;
    } else {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);

  for (let i = 0; i < zeroCount; i++) {
    newArray.push(0);
  }

  return newArray;
};

console.log(array);
console.log(moveZerosToEnd(array));

// 🔴 - Usando sort(): Solución de HolaMundo

function moverCerosAlFinal(arr) {
  return arr.sort((a, b) => (a === 0 ? 1 : b === 0 ? -1 : 0));
}

const numeros = [0, 1, 0, 3, 12, 0, 5];
console.log(moverCerosAlFinal(numeros));

// 🔴 - Usando sort() y condicional if
const moveZerosWithSort = (array) => {
  return array.sort((a, b) => {
    // Si 'a' es cero y 'b' no es cero, 'a' debe ir después ('a' es "mayor")
    if (a === 0 && b !== 0) {
      return 1; // Mueve 'a' hacia el final
    }
    // Si 'b' es cero y 'a' no es cero, 'b' debe ir después ('b' es "mayor")
    if (b === 0 && a !== 0) {
      return -1; // Mueve 'b' hacia el final (manteniendo 'a' antes)
    }
    // Si ambos son ceros o ambos no son ceros, su orden relativo no importa para este criterio
    return 0; // Mantén su orden relativo
  });
};

const originalArray = [0, 1, 0, 3, 12, 0, 5];
console.log("Original Array:", originalArray);
console.log("Reorganized Array (with sort):", moveZerosWithSort(originalArray));
