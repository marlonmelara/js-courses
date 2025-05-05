// flat
// Declaración de un arreglo anidado.
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];

// Utiliza 'flat' para aplanar el arreglo hasta una profundidad de 1 nivel.
console.log(array.flat(1)); // Resultado: [1, 1, 2, 3, 4, 1, 3, 5, 6, [1, 2, 4]]

// El método flat(1) aplanará los elementos del arreglo hasta una profundidad de un nivel. En tu ejemplo, el subarreglo [1, 3, 5, 6, [1, 2, 4]] se aplanará un nivel, resultando en 1, 3, 5, 6, [1, 2, 4]. El arreglo más interno [1, 2, 4] permanece sin cambios, ya que el método flat se ha aplicado solo a una profundidad de 1 nivel.

// flatMap
// El método flatMap() introducido en ECMAScript 2019 (ES10) es una combinación de map() seguido de flat(). Este método primero mapea cada elemento utilizando una función de mapeo que tú proporcionas, y luego aplana el resultado. Es especialmente útil cuando cada elemento del arreglo se transforma en un arreglo y luego quieres aplanar los resultados en un único arreglo.

// Declaración de un arreglo.
const array2 = [1, 2, 3, 4, 5];

// Utiliza 'flatMap' para mapear cada valor a un par [valor, valor * 2] y luego aplana el arreglo.
console.log(array2.flatMap((v) => [v, v * 2])); // Resultado: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// En este caso, flatMap toma cada elemento v del arreglo array2, lo transforma en un nuevo arreglo [v, v * 2] (donde el primer elemento es v y el segundo es v multiplicado por 2), y luego aplana todos los arreglos resultantes en un solo arreglo. El resultado es un arreglo que contiene cada número del arreglo original seguido de su doble.
