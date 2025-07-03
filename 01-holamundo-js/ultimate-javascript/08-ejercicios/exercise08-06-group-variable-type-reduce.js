// Ejercicio 06: Hacer una función que agrupe los elementos del array en sub arrays por tipo de dato usando reduce

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

// Agrupa los elementos por tipo, diferenciando entre null, array y objetos
const sortByTypeWithReduce = randomArray.reduce((acc, item) => {
  let itemType;

  // Detecta null explícitamente (typeof null === "object")
  if (item === null) {
    itemType = "null";
  } else if (Array.isArray(item)) {
    itemType = "array"; // Distingue arrays usando Array.isArray()
  } else {
    itemType = typeof item; // Para el resto, usa typeof directamente
  }

  // Crea la clave si no existe
  if (!acc[itemType]) {
    acc[itemType] = [];
  }

  acc[itemType].push(item); // Agrega el elemento al array correspondiente
  return acc;
}, {});

console.log(sortByTypeWithReduce);

// acc[itemType] = acc[itemType] ? acc[itemType] : [];
// acc[itemType].push(item);
