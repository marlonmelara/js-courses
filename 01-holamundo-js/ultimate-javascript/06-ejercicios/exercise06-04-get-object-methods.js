// Ejercicio 04: Crear una función que determine cuales son los métodos de un objeto y guardarlos en un array
// ℹ️ Los métodos son funciones que están dentro de un objeto

let obj = {
  id: 1,
  name: "Lucy",
  login: function () {},
  logout: function () {},
};

// Solución 1️⃣
// Usando un bucle for in
function getMethods(obj) {
  let methods = [];
  for (let prop in obj) {
    if (typeof obj[prop] === "function") {
      methods.push(prop);
    }
  }
  return methods;
}

console.log(getMethods(obj)); // ['login', 'logout']

// Solución 2️⃣
// Usando Object.keys
function getMethods2(obj) {
  const methods = [];
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "function") {
      methods.push(key);
    }
  }
  return methods;
}
console.log(getMethods2(obj)); // ['login', 'logout']

// Solución 3️⃣ (Alternative using Object.keys and filter)
function getMethods3(obj) {
  return Object.keys(obj).filter((key) => typeof obj[key] === "function");
}

console.log(getMethods3(obj)); // ['login', 'logout']
