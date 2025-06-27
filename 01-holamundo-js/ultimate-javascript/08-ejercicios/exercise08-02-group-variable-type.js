// Ejercicio 02: Hacer una función que agrupe los elementos del array en sub arrays por tipo de dato

const randomArray = [
  "Hello",
  12,
  "world!",
  {},
  { id: 15 },
  [1, 2, 3],
  true,
  false,
  null,
];

// Usando if else statement
const sortByType = (array) => {
  const booleans = [];
  const numbers = [];
  const strings = [];
  const arrays = [];
  const objects = [];
  const categorizedElements = [booleans, numbers, strings, arrays, objects];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "boolean") {
      booleans.push(array[i]);
    } else if (typeof array[i] === "string") {
      strings.push(array[i]);
    } else if (typeof array[i] === "number") {
      numbers.push(array[i]);
    } else if (Array.isArray(array[i])) {
      arrays.push(array[i]);
    } else if (typeof array[i] === "object" && array[i] !== null) {
      objects.push(array[i]);
    } else {
      // Para tipos no contemplados (functions, symbols, etc.)
      console.log("Tipo no manejado:", typeof array[i], array[i]);
    }
  }
  return categorizedElements;
};

const newSortArray = sortByType(randomArray);
console.log(randomArray);
console.log(newSortArray);

// Usando filter
const sortByTypeWithFilter = (array) => {
  return [
    array.filter((element) => typeof element === "boolean"),
    array.filter((element) => typeof element === "number"),
    array.filter((element) => typeof element === "string"),
    array.filter((element) => Array.isArray(element)),
    array.filter(
      (element) =>
        typeof element === "object" &&
        !Array.isArray(element) &&
        element !== null
    ),
  ];
};

const newSortArrayWithFilter = sortByTypeWithFilter(randomArray);
console.log(randomArray);
console.log(newSortArrayWithFilter);
