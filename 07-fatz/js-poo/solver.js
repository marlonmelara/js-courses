function findSubsetSums(array, targetSum) {
  const result = [];
  // Función interna recursiva
  function findSubsetSumsRecursive(tempArray, currentIndex, currentSum) {
    // Verificar si hemos alcanzado la suma objetivo
    if (currentSum === targetSum) {
      result.push([...tempArray]);
      return;
    }

    // Si el índice actual es mayor o igual al tamaño del array, retornar
    if (currentIndex >= array.length || currentSum > targetSum) {
      return;
    }

    // Incluir el número en la posición actual y continuar
    tempArray.push(array[currentIndex]);
    findSubsetSumsRecursive(
      tempArray,
      currentIndex + 1,
      currentSum + array[currentIndex]
    );

    // No incluir el número en la posición actual y continuar
    tempArray.pop();
    findSubsetSumsRecursive(tempArray, currentIndex + 1, currentSum);
  }

  findSubsetSumsRecursive([], 0, 0);
  return result;
}

const numbers = [
  6859716, 6906869, 4921240, 4707699, 2913803, 2778422, 2469708, 2863446,
  6250588, 5321957, 6761244, 4821924, 3357360, 5143190, 4250459, 2591010,
  3428794, 5714656, 4750491, 6071822, 5786089, 5143190, 6285391, 1860959,
  4826552, 5327084, 1791298, 3432215, 4254517, 5148323, 4755048, 6077881,
  5791863, 5148323, 5076818, 6256643,
];

const targetSum = 21681448;
const subsets = findSubsetSums(numbers, targetSum);

console.log("Subsets summing to", targetSum, ":", subsets);

/*
El código que proporcionaste es una función de JavaScript que busca todos los subconjuntos de un array de números que suman a un valor objetivo (`targetSum`). A continuación, te explico paso a paso cómo se ejecuta el código:

1. Se define la función `findSubsetSums`, que toma como argumentos un array de números y un número que representa la suma objetivo.

2. Dentro de la función `findSubsetSums`, se declara una variable `result` que es un array vacío. Este array se llenará con los subconjuntos que sumen el `targetSum`.

3. Se define una función interna recursiva `findSubsetSumsRecursive` que toma tres argumentos:
   - `tempArray`: un array temporal que va construyendo los subconjuntos candidatos.
   - `currentIndex`: el índice actual en el array original de números que se está considerando para agregar al subconjunto.
   - `currentSum`: la suma actual de los números en `tempArray`.

4. La función recursiva comienza con dos casos base:
   - Si `currentSum` es igual al `targetSum`, se ha encontrado un subconjunto que suma el valor objetivo. Este subconjunto se agrega al array `result`.
   - Si `currentIndex` es mayor o igual al tamaño del array original o si `currentSum` es mayor que `targetSum`, la función retorna inmediatamente, ya que no es posible que los números restantes o el exceso de suma conduzcan a una solución válida.

5. Si no se cumple ninguno de los casos base, la función recursiva intenta dos posibilidades:
   - Primero, incluye el número en la posición `currentIndex` del array original en `tempArray` y llama a `findSubsetSumsRecursive` con el siguiente índice y la nueva suma que incluye el número recién añadido.
   - Después de regresar de la recursión anterior, se hace "backtrack" quitando (pop) el último número añadido a `tempArray` y se llama a `findSubsetSumsRecursive` nuevamente con el siguiente índice, pero manteniendo la suma actual (es decir, no incluyendo el número que se acaba de quitar).

6. La función `findSubsetSumsRecursive` se llama por primera vez con un `tempArray` vacío, índice 0 y suma 0, lo que inicia el proceso recursivo.

7. Una vez que la función recursiva ha terminado de ejecutarse (habiendo explorado todas las combinaciones posibles), la función principal `findSubsetSums` retorna el array `result`, que contiene todos los subconjuntos encontrados que suman a `targetSum`.

8. Fuera de la función, se declara un array `numbers` con los números dados y se define el `targetSum` como 21681448.

9. Se llama a `findSubsetSums` con el array `numbers` y el `targetSum` y se guarda el resultado en `subsets`.

10. Finalmente, se imprime en la consola el valor `targetSum` y los subconjuntos encontrados en `subsets`.

Este código puede tardar mucho tiempo en ejecutarse, dependiendo del tamaño del array y del `targetSum`, debido a la naturaleza exponencial del problema del subconjunto de suma.
*/
