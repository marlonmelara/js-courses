/**
Crear algoritmo que devuelva un array de
objetos en base a pares */

let pairs = [1, { name: "Juan" }, 2, { name: "Pedro" }, 3, { name: "Maria" }];

let array = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "Maria" },
];

function toCollection(arr) {
  let collection = [];
  for (let i = 0; i < arr.length; i += 2) {
    let id = arr[i]; // Número (id)
    let obj = arr[i + 1]; // Objeto con la propiedad name
    if (typeof id === "number" && obj && typeof obj.name === "string") {
      collection.push({ id, name: obj.name });
    }
  }
  return collection;
}

let result = toCollection(pairs);
console.log(result); // [{ id: 1, name: "Juan" }, { id: 2, name: "Pedro" }, { id: 3, name: "Maria" }]// [{ id: 1, name: "Juan" }, { id: 2, name: "Pedro" }, { id: 3, name: "Maria" }]
