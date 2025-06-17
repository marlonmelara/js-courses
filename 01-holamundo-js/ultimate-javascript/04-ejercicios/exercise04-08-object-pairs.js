/**
Crear algoritmo que tome un array de objetos
y devuelva un array de pares */

let array = [
  {
    id: 1,
    name: "Snoopy",
  },
  {
    id: 2,
    name: "Charlie",
  },
  {
    id: 3,
    name: "Lucy",
  },
];

console.log(array);

// ✅ Solución 1: Usando for of y for in

const toPairs = (arr) => {
  let pairs = [];
  for (let obj of arr) {
    for (let key in obj) {
      pairs.push([key, obj[key]]);
    }
  }
  return pairs;
};

let result = toPairs(array);
console.log(result);

// 🧩 Solución 2 (HolaMundo): Usando for in y el índice

function toPairs1(arr) {
  let pairs = []; // Se declara una variable pairs, que es un array vacío donde se guardarán los pares que vamos a construir.
  for (idx in arr) {
    let elemento = arr[idx]; //Se obtiene el objeto actual del array usando el índice idx. En el primer ciclo, esto equivale a:
    // let elemento = arr[0]; // { id: 1, name: "Snoopy" }
    pairs[idx] = [elemento.id, elemento]; // Se crea un nuevo array en pairs en la posición idx, que contiene el id del objeto y el objeto completo.
    // Por ejemplo: pairs[0] = [1, { id: 1, name: "Snoopy" }];
  }
  return pairs;
}

let result1 = toPairs1(array);
console.log(result1);
// El resutado sera:
/**
[
  [1, { id: 1, name: "Snoopy" }],
  [2, { id: 2, name: "Charlie" }],
  [3, { id: 3, name: "Lucy" }]
]
  */

// 🔁 Solución 3: Alternativa a la solución 2, más moderna y segura:
// Usando for of y Object.entries()
function toPairs1(arr) {
  let pairs = [];
  for (const [index, elemento] of arr.entries()) {
    pairs.push([elemento.id, elemento]);
  }
  return pairs;
}

let result2 = toPairs1(array);
console.log(result2);
